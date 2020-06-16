import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import DetailsModal from '../reuse/DetailsModal';
import { colors } from '../Constants';

const locations = [{}];

const HomeScreen = (props) => {
  const [showDeatilModal, setShowDetailModal] = useState(true);

  props.navigation.setOptions({
    headerStyle: {
      backgroundColor: colors.HEADER_COLOR,
    },
    headerTitle: "Home",
    headerTitleAlign: 'center',
    headerTintColor: '#fff'
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 31.5143,
          longitude: 75.9115,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
         onPress={(e) => {e.stopPropagation(); alert('test');}}
          // onPress={() => {
          //   setShowDetailModal(true);
          //   console.log("here")
          // }}
          coordinate={{
            latitude: 31.5143,
            longitude: 75.9115,
          }}
          title={'home'}
          description={'cuurent location'}
        />
      </MapView>
      <View
        style={{
          flex: 1,
        }}>
        <TextInput placeholder="Search" style={styles.textInputStyle} />
      </View>
      {showDeatilModal && (
        <DetailsModal
          onCancelClick={() => {
            setShowDetailModal(false);
          }}
          onChatClick={() => {
            setShowDetailModal(false);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  textInputStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    height: 50,
  },
});

export default HomeScreen;
