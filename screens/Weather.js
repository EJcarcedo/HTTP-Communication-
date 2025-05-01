import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import background from "../assets/background.jpg";
import { useEffect, useState } from "react";
import axios from 'axios';

const ESP32_IP = 'http://192.168.1.43'; // Replace with your ESP32 IP address

const Weather = () => {
  const [temp, setTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ESP32_IP);
        const data = response.data.split('\n');
        setTemp(parseFloat(data[0].split(': ')[1].replace('°C', '')));
        setHumidity(parseFloat(data[1].split(': ')[1].replace('%', '')));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  
  return( 
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.tempWrapper}>
        <Text style={styles.text}>{temp !== null ? `${temp.toFixed(1)}°C` : 'Loading...'}</Text>
      </View>
      <View style={styles.data}>
        <View style={styles.spacer}></View>
        <View style={styles.dataWrapper}>
          <View style={styles.humid}>
            <Text style={styles.dataText}>{humidity !== null ? `${humidity.toFixed(1)}%` : 'Loading...'}</Text>
            <Text style={styles.title}>Humidity</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  tempWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 150,
    fontWeight: "100",
    textAlign: "center",
    color: "white",
  },
  data: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  dataWrapper: {
    backgroundColor: "rgba( 255, 255, 255, 0.2)",
    flexDirection: "row",
    height:"25%",
    justifyContent: "center",
    alignItems:"center",
    width: "80%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
  },
  spacer: {
    height: "20%",
  },
  humid: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dataText: {
    fontSize: 20,
    fontWeight: "200",
    textAlign: "center",
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    fontFamily: "Helvetica",
  },
});
