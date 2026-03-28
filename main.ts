//% color="#0fbc11" icon="\uf018"
namespace MyRobot {

    // (โค้ดเดินหน้าของแมนที่มีอยู่แล้ว)
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
        // คำสั่งนี้จะเอาภาพที่แมนวาดไปแสดงบนจอครับ
        img.showImage(0)
    }
}