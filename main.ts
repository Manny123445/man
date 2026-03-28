namespace MyRobot {

    //% block="เดินหน้า"
    export function moveForward(): void {
        basic.showIcon(IconNames.Happy)
    }

    /**
     * บล็อกสำหรับวาดหน้าตาลงบนจอ LED
     */
    //% block="แสดงหน้าตา %img"
    //% img.shadow="device_build_image"
    export function showCustomFace(img: Image): void {
        img.showImage(0)
    }
}
