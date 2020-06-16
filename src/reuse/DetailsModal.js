import React, {Component, useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../Constants';
import {color} from 'react-native-reanimated';

const DetailsModal = (props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Modal animationType="slide" transparent={true} visible={true}>
        <View
          style={{
            flex: 0.7,
          }}
        />
        <View
          style={{
            flex: 0.3,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              margin: 30,
              flex: 1,
            }}>
            <Image
              style={{
                height: 70,
                width: 70,
                borderRadius: 10,
                backgroundColor: 'lightgrey',
              }}
            />
            <View
              style={{
                marginLeft: 20,
                justifyContent: 'center',
                flex: 1,
              }}>
              <Text style={styles.headingStyle}>User Name</Text>
              <View
                style={{
                  marginTop: 8,
                }}>
                <Text style={styles.headingStyle}>Some details</Text>
                <Text
                  style={{
                    color: 'grey',
                  }}>
                  Some details
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              flex: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: colors.THEME_COLOR,
              }}>
              <TouchableOpacity
                onPress={props.onCancelClick}
                activeOpacity={0.7}
                style={styles.buttonsView}>
                <Text style={styles.buttonsTextStyle}>Cancel</Text>
              </TouchableOpacity>
              <View
                style={{
                  width: 2,
                  marginVertical: 15,
                  backgroundColor: 'white',
                }}
              />
              <TouchableOpacity
                onPress={props.onChatClick}
                activeOpacity={0.7}
                style={styles.buttonsView}>
                <Text style={styles.buttonsTextStyle}>Chat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsView: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
  },
  buttonsTextStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  headingStyle: {
    fontWeight: 'bold',
  },
});

export default DetailsModal;
