"""Remove user authentication and item ownership.

Revision ID: a3c7f1d2e890
Revises: fe56fa70289e
Create Date: 2026-11-19
"""

from alembic import op
import sqlalchemy as sa


revision = "a3c7f1d2e890"
down_revision = "fe56fa70289e"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.drop_constraint("item_owner_id_fkey", "item", type_="foreignkey")
    op.drop_column("item", "owner_id")
    op.drop_table("user")


def downgrade() -> None:
    op.create_table(
        "user",
        sa.Column("email", sa.String(length=255), nullable=False),
        sa.Column("is_active", sa.Boolean(), nullable=False),
        sa.Column("is_superuser", sa.Boolean(), nullable=False),
        sa.Column("full_name", sa.String(length=255), nullable=True),
        sa.Column("id", sa.Uuid(), nullable=False),
        sa.Column("hashed_password", sa.String(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=True),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_user_email", "user", ["email"], unique=True)
    op.add_column("item", sa.Column("owner_id", sa.Uuid(), nullable=True))
    op.create_foreign_key(
        "item_owner_id_fkey", "item", "user", ["owner_id"], ["id"], ondelete="CASCADE"
    )
