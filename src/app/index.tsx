import { FlatList, StyleSheet, Text, View } from 'react-native'

import products from '../products.json'

import Card from '@/components/card'

export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>รายการสินค้า</Text>

      <FlatList
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        // products.json ใช้คีย์ "image " (มีช่องว่างท้ายชื่อ) จึงต้องอ้างแบบนี้ เพราะห้ามแก้ไฟล์ json
        <Card name={item.name} image={item['image ']} price={item.price} />
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    margin: 12
  },
  list: {
    flex: 1
  },
  listContent: {
    paddingBottom: 12
  }
})
