import { Image, StyleSheet, Text, View } from 'react-native'

type CardProps = {
    name: string,
    image: string,
    price: number
}

// แปลงตัวเลขเป็นข้อความที่มีจุลภาคคั่นหลักพัน เช่น 18500 -> "18,500"
const formatPrice = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

// component การ์ดสินค้า 1 ใบ: รูปซ้าย ชื่อกลาง ราคาขวา
export default function Card({ name, image, price }: CardProps) {
    return (
        <View style={cardStyle.box}>
            <Image source={{ uri: image }} style={cardStyle.image} resizeMode="cover" />
            <View style={cardStyle.info}>
                <Text style={cardStyle.name}>{name}</Text>
            </View>
            <Text style={cardStyle.price}>฿{formatPrice(price)}</Text>
        </View>
    )
}

const cardStyle = StyleSheet.create({
    box: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginHorizontal: 12,
        marginVertical: 6,
        padding: 10,
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 8,
        backgroundColor: "#1e1e1e"
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 6,
        backgroundColor: "#2a2a2a"
    },
    info: {
        flex: 1
    },
    name: {
        fontSize: 16,
        color: "#f5f5f5"
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#ffb020"
    }
})
