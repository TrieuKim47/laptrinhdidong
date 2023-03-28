import React, { useState } from 'react';
import Item from './Components/Item';
import ItemDetail from './Components/ItemDetail';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [data, setData] = useState([])
  async function fetchData() {
    try {
      const response = await fetch('https://testnets-api.opensea.io/api/v1/assets')
        .then(res=> res.json())
        .then(data => { setData(data.assets) })
    } catch (error) {
      console.error(error);
    }
  }
  return (
      <View style={styles.container}>
          {
            !selectedItem ?
              (
                <>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={fetchData}>
                    <Text
                      style={styles.txtbtn}>
                      LOAD
                    </Text>
                  </TouchableOpacity>
                  <ScrollView>
                    {
                      data.map((item) =>
                        <Item
                          onPress={() => setSelectedItem({ url: item.image_url, name: item.name, description: item.description })}
                          url={item.image_url}
                          name={item.name}
                          key={item.id}                          
                        />)
                    }
                  </ScrollView>
                </>
              ) : (<>
                      <ItemDetail
                        url={selectedItem.url}
                        name={selectedItem.name}
                        description={selectedItem.description}
                      />
                      <TouchableOpacity
                        style={styles.btn}
                        onPress={() => setSelectedItem(null)}>
                        <Text
                          style={styles.txtbtn}>
                          BACK
                        </Text>
                      </TouchableOpacity>
                </>)
            }
       </View>
   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30
  },
  btn: {
    backgroundColor: '#0000FF',
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    },
  txtbtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
});

export default App;