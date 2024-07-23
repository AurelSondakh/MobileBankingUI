/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const height = Dimensions.get('screen').height;

const BottomModalComponent = ({
  title,
  setShowModal,
  content: ContentComponent,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      statusBarTranslucent={true}
      keyboardShouldPersistTaps="always"
      onRequestClose={() => setShowModal(false)}>
      <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalTitleContainer}>
              <Text style={styles.modalTitle}>{title}</Text>
            </View>
            <View>
              <ContentComponent />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    height: height / 1.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#A2A2A2',
    paddingBottom: 12,
  },
  modalTitle: {
    fontFamily: 'Poppins-Bold',
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default BottomModalComponent;
