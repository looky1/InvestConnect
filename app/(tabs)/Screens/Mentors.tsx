// File: ./Screens/Mentors.tsx

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStackParamList } from '../index';

type MentorsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Mentors'>;

const Mentors: React.FC = () => {
  const navigation = useNavigation<MentorsScreenNavigationProp>();
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section (like HomeScreen.tsx) */}
      <View style={styles.header}>
        <View style={styles.topRow}>
          <Image
            style={styles.logo}
            source={require('../../../assets/images/IC logo.png')}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.bottomRow}>
          {/* User profile image now on the left */}
          <Image
            style={styles.userImage}
            source={require('../../../assets/images/user.jpg')}
          />
          <Text style={styles.welcomeText}>Welcome, Zama Langfled</Text>
        </View>
      </View>

      {/* Navigation Bar with Hamburger icon */}
      <View style={styles.navBar}>
        <Text style={styles.navTitle}>MENTORS</Text>
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons name="menu" size={35} color="#f5d17f" />
        </TouchableOpacity>
      </View>

      {/* Main Content: Two Mentor Boxes */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Mentor Box 1 */}
        <View style={styles.mentorBox}>
          <Image
            style={styles.mentorImage}
            source={require('../../../assets/images/mentor1.jpg')}
          />
          <Text style={styles.mentorName}>Jane Doe</Text>
          <Text style={styles.mentorInfo}>Expert in Mobile Development</Text>
          <Text style={styles.mentorInfo}>Location: Durban</Text>
          <View style={styles.mentorButtonContainer}>
            <TouchableOpacity style={styles.mentorButton}>
              <Text style={styles.mentorButtonText}>Connect</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mentorButton}>
              <Text style={styles.mentorButtonText}>Message</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Mentor Box 2 */}
        <View style={styles.mentorBox}>
          <Image
            style={styles.mentorImage}
            source={require('../../../assets/images/mentor2.jpg')}
          />
          <Text style={styles.mentorName}>John Smith</Text>
          <Text style={styles.mentorInfo}>Seasoned Software Engineer</Text>
          <Text style={styles.mentorInfo}>Location: Johannesburg</Text>
          <View style={styles.mentorButtonContainer}>
            <TouchableOpacity style={styles.mentorButton}>
              <Text style={styles.mentorButtonText}>Connect</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mentorButton}>
              <Text style={styles.mentorButtonText}>Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Footer / Bottom Navigation (like HomeScreen.tsx) */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home-outline" size={28} color="blue" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search-outline" size={28} color="black" />
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="people-outline" size={28} color="black" />
          <Text style={styles.navText}>My Network</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={28} color="black" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Side Menu Overlay */}
      {isMenuVisible && (
        <View style={styles.sideMenu}>
          <TouchableOpacity onPress={() => setIsMenuVisible(false)}>
            <Text style={styles.sideMenuText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Mentors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // Header styles matching HomeScreen.tsx
  header: {
    backgroundColor: '#C0C0C0',
    padding: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // Reorder below so image comes first
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  // Navigation Bar with Hamburger icon
  navBar: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  navTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  // Main content styles
  content: {
    flexGrow: 1,
    padding: 10,
  },
  mentorBox: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  mentorImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Circular mentor image
    marginBottom: 10,
  },
  mentorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  mentorInfo: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
    textAlign: 'center',
  },
  mentorButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  mentorButton: {
    backgroundColor: '#0000CD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  mentorButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Footer styles matching HomeScreen.tsx
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#C0C0C0',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
  },
  // Side Menu Overlay (same as previously defined)
  sideMenu: {
    position: 'absolute',
    top: 5,
    right: 0,
    width: 150,
    height: '100%',
    backgroundColor: '#fff',
    borderLeftWidth: 1,
    borderColor: '#ccc',
    paddingTop: 50,
    paddingHorizontal: 10,
    zIndex: 100,
    shadowColor: '#C0C0C0',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
    elevation: 5,
  },
  sideMenuText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});