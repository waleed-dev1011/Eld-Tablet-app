import React from 'react';
import {ImageBackground, StyleProp, StyleSheet} from 'react-native';
import FastImage, {FastImageProps, ImageStyle} from 'react-native-fast-image';
import {placeholder} from '../../../assets/images';

interface ImageProps {
  imageUrl: string;
  defaultImageUrl: FastImageProps['defaultSource'];
  style?: StyleProp<ImageStyle>;
  placeholderColor?: string;
}

const CacheImage: React.FC<ImageProps> = ({
  imageUrl,
  defaultImageUrl = placeholder,
  style = {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
}) => {
  return (
    <ImageBackground source={defaultImageUrl} style={style}>
      <FastImage
        source={{uri: imageUrl, priority: FastImage.priority.normal}}
        style={style}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default React.memo(CacheImage);
