import cv2
import numpy as np

# 1. Đọc ảnh
def slicing(imgpath):
    img = cv2.imread(imgpath)

    if img is None:
        raise FileNotFoundError("Không tìm thấy ảnh")

    # 2. Color Slicing
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

    lower = np.array([0, 0, 0])
    upper = np.array([180, 150, 80])

    mask = cv2.inRange(hsv, lower, upper)

    # 3. Tạo kernel 3x3
    kernel = np.ones((3, 3), np.uint8)

    # 4. Các phép toán hình thái học
    erosion = cv2.erode(mask, kernel, iterations=1)

    dilation = cv2.dilate(mask, kernel, iterations=1)

    opening = cv2.morphologyEx(
        mask, cv2.MORPH_OPEN, kernel
    )

    closing = cv2.morphologyEx(
        mask, cv2.MORPH_CLOSE, kernel
    )

    # 5. Lọc nhiễu và làm liền vùng hỏng
    processed = cv2.morphologyEx(
        mask, cv2.MORPH_OPEN, kernel
    )
    processed = cv2.morphologyEx(
        processed, cv2.MORPH_CLOSE, kernel
    )

    # 6. Khoanh vùng đốm hỏng
    contours, _ = cv2.findContours(
        processed,
        cv2.RETR_EXTERNAL,
        cv2.CHAIN_APPROX_SIMPLE
    )

    result = img.copy()

    for contour in contours:
        if cv2.contourArea(contour) > 5:
            cv2.drawContours(
                result, [contour], -1, (0, 255, 0), 2
            )

    # 7. Hiển thị kết quả
    cv2.imshow("Original", img)
    cv2.imshow("Color Slicing", mask)
    cv2.imshow("Erosion", erosion)
    cv2.imshow("Dilation", dilation)
    cv2.imshow("Opening", opening)
    cv2.imshow("Closing", closing)
    cv2.imshow("Detected Defects", result)

    cv2.waitKey(0)
    cv2.destroyAllWindows()