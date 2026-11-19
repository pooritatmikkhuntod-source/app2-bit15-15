// นำเข้า component พื้นฐานจาก react-native
import { Image, StyleSheet, Text, View } from 'react-native'

// ชนิดข้อมูลของ props ที่การ์ดรับเข้ามา
type CardProps = {
    name: string,   // ชื่อสินค้า
    image: string,  // URL รูปสินค้า
    price: number   // ราคาสินค้า (บาท)
}

// แปลงตัวเลขเป็นข้อความที่มีจุลภาคคั่นหลักพัน เช่น 18500 -> "18,500"
const formatPrice = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

// component การ์ดสินค้า 1 ใบ: รูปซ้าย ชื่อกลาง ราคาขวา
export default function Card({ name, image, price }: CardProps) {
    return (
        // กรอบการ์ด เรียงเนื้อหาในแนวนอน
        <View style={cardStyle.box}>
            {/* รูปสินค้า โหลดจาก URL */}
            <Image source={{ uri: image }} style={cardStyle.image} resizeMode="cover" />
            {/* ส่วนชื่อสินค้า ขยายเต็มพื้นที่ที่เหลือ เพื่อดันราคาไปชิดขวา */}
            <View style={cardStyle.info}>
                <Text style={cardStyle.name}>{name}</Text>
            </View>
            {/* ราคา อยู่ขวามือของการ์ด */}
            <Text style={cardStyle.price}>฿{formatPrice(price)}</Text>
        </View>
    )
}

// สไตล์ของการ์ด (ธีมสีดำ)
const cardStyle = StyleSheet.create({
    // กรอบการ์ด
    box: {
        flexDirection: "row",        // เรียงลูกในแนวนอน
        alignItems: "center",        // จัดให้อยู่กึ่งกลางแนวตั้ง
        gap: 12,                     // ระยะห่างระหว่างรูป/ชื่อ/ราคา
        marginHorizontal: 12,        // ระยะห่างซ้ายขวาจากขอบจอ
        marginVertical: 6,           // ระยะห่างระหว่างการ์ดบนล่าง
        padding: 10,                 // ระยะห่างภายในการ์ด
        borderWidth: 1,              // ความหนาเส้นขอบ
        borderColor: "#333",         // สีเส้นขอบ
        borderRadius: 8,             // ความโค้งของมุม
        backgroundColor: "#1e1e1e"   // สีพื้นการ์ด (เทาเข้ม)
    },
    // รูปสินค้า
    image: {
        width: 80,
        height: 80,
        borderRadius: 6,             // โค้งมุมรูปเล็กน้อย
        backgroundColor: "#2a2a2a"   // สีรองระหว่างรอรูปโหลด
    },
    // กล่องใส่ชื่อ
    info: {
        flex: 1                      // กินพื้นที่ที่เหลือ ทำให้ราคาชิดขวา
    },
    // ข้อความชื่อสินค้า
    name: {
        fontSize: 16,
        color: "#f5f5f5"             // สีขาวนวล
    },
    // ข้อความราคา
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#ffb020"             // สีเหลืองส้ม
    }
})
