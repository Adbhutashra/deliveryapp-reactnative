import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const ItemDetailsScreen = () => {
  const [quantity, setQuantity] = useState(2);
  const [selectedSize, setSelectedSize] = useState('14"');

  const sizes = ['10"', '14"', '16"'];

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../../assets/Images/chevronleft.png')}  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../../assets/Images/heart.png')}  />
            {/* <AntDesign name="heart" size={24} color="#FF6B00" /> */}
          </TouchableOpacity>
        </View>

        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/Images/burger.jpeg')}
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>Burger Bistro</Text>
          
          <View style={styles.restaurantRow}>
            {/* <MaterialCommunityIcons name="food" size={20} color="#FF6B00" /> */}
            <Text style={styles.restaurantName}>Rose Garden</Text>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
            <Image source={require('../../assets/Images/Star.png')}  />
              <Text style={styles.statText}>4.7</Text>
            </View>
            <View style={styles.statItem}>
            <Image source={require('../../assets/Images/truck.png')} style={{ transform: [{ rotate: '180deg' }] }} />
              <Text style={styles.statText}>Free</Text>
            </View>
            <View style={styles.statItem}>
            <Image source={require('../../assets/Images/clock.png')}  />
              <Text style={styles.statText}>20 min</Text>
            </View>
          </View>

          <Text style={styles.description}>
            Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          </Text>

          <View style={styles.sizeSection}>
            <Text style={styles.sectionTitle}>SIZE:</Text>
            <View style={styles.sizeOptions}>
              {sizes.map((size) => (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.sizeButton,
                    selectedSize === size && styles.selectedSizeButton,
                  ]}
                  onPress={() => setSelectedSize(size)}
                >
                  <Text style={[
                    styles.sizeButtonText,
                    selectedSize === size && styles.selectedSizeButtonText,
                  ]}>
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Ingredients */}
          <View style={styles.ingredientsSection}>
            <Text style={styles.sectionTitle}>INGREDIENTS</Text>
            <View style={styles.ingredientsRow}>
              {['salt', 'meat', 'spicy', 'lettuce', 'herbs'].map((item, index) => (
                <View key={index} style={styles.ingredientIcon}>
                  {/* <MaterialCommunityIcons name="food" size={24} color="#FF6B00" /> */}
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$32</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
          <Image source={require('../../assets/Images/Minus.png')}  />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
          <Image source={require('../../assets/Images/Plus.png')}  />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  iconButton: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    backgroundColor: '#FFB74D',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '80%',
    height: '80%',
  },
  infoContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  restaurantRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  restaurantName: {
    marginLeft: 8,
    fontSize: 16,
    color: '#666',
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  statText: {
    marginLeft: 4,
    color: '#666',
  },
  description: {
    color: '#666',
    lineHeight: 22,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  sizeOptions: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  sizeButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginRight: 12,
  },
  selectedSizeButton: {
    backgroundColor: '#FF6B00',
  },
  sizeButtonText: {
    fontSize: 16,
    color: '#666',
  },
  selectedSizeButtonText: {
    color: '#FFF',
  },
  ingredientsRow: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  ingredientIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF2E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  bottomBar: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    alignItems: 'center',
  },
  priceContainer: {
    flex: 1,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1B1E',
    borderRadius: 25,
    padding: 4,
    marginRight: 16,
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 16,
  },
  addButton: {
    backgroundColor: '#FF6B00',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ItemDetailsScreen;