import React from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.avatar}>
            <Icon name="person-circle-outline" size={40} color="#FF4500" />
          </View>
          <View>
            <Text style={styles.username}>Riski Maulana Prayoga</Text>
            <Text style={styles.points}>Regular • 15.286 Poin</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <Text>🔔</Text>
        </TouchableOpacity>
      </View>
      

      <View style={styles.accountCard}>
        <View style={styles.accountInfo}>
          <Text style={styles.accountLabel}>Prabayar</Text>
          <Text>085752643707</Text>
        </View>
        <View style={styles.balanceSection}>
          <View>
            <Text style={styles.balanceLabel}>Pulsa</Text>
            <Text style={styles.balanceValue}>Rp0</Text>
          </View>
          <View>
            <Text style={styles.balanceLabel}>Kuota Internet</Text>
            <Text style={styles.balanceValue}>34.1 GB</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addAccountButton}>
          <Text style={styles.addAccountText}>Tambah Akun</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        {[
          { icon: "list-outline", label: "Filter" },
          { icon: "flame-outline", label: "Bulanan" },
          { icon: "stats-chart-outline", label: "Harian" },
          { icon: "warning-outline", label: "Paket Darurat" }
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.iconButton}>
            <View style={styles.iconWrapper}>
              <Icon name={item.icon} size={30} />
              <Text style={styles.iconLabel}>{item.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>


      <View style={styles.packageOffer}>
        <Text style={styles.offerTitle}>For You</Text>
        <View style={styles.packageCard}>
          <Text style={styles.packageData}>18 GB</Text>
          <Text>Internet Sakti</Text>
          <Text>Rp50.000</Text>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Beli</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.packageCard}>
          <Text style={styles.packageData}>20 GB</Text>
          <Text>Internet Sakti</Text>
          <Text>Rp52.000</Text>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Beli</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  header: {
    backgroundColor: '#FFD700',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    color: '#fff',
  },
  points: {
    color: '#fff',
  },
  notificationIcon: {
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  accountCard: {
    backgroundColor: '#FF4500',
    margin: 16,
    padding: 16,
    borderRadius: 16,
  },
  accountInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  accountLabel: {
    fontWeight: 'bold',
  },
  balanceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  balanceLabel: {
    color: '#fff',
  },
  balanceValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  addAccountButton: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  addAccountText: {
    color: '#FF4500',
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    padding: 16,
  },
  iconButton: {
    borderWidth: 1,
    borderColor: '#FFD700', // Outline color
    backgroundColor: 'white', // Background transparent for outlined effect
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
  },
  iconLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#000', // Customize as needed
  },
  quickActions: {
    paddingHorizontal: 16,
  },
  actionButton: {
    borderWidth: 1,
    borderColor: '#FFD700', // Outline color
    backgroundColor: 'transparent', // Background transparent for outlined effect
    padding: 12,
    marginHorizontal: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionText: {
    color: '#FFD700', // Text color to match outline
    fontWeight: 'bold',
  },
  packageOffer: {
    paddingHorizontal: 16,
  },
  offerTitle: {
    fontWeight: 'bold',
    marginBottom: 16,
  },
  packageCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  packageData: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  buyButton: {
    backgroundColor: '#FF4500',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
