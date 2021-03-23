import React, {useState} from 'react';
import Data from '../assest/questions.json';
import Icon from 'react-native-vector-icons/Entypo';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#D3D3D3');
  const [correct, setCorrect] = useState("saad");

  const Width = 100 - score;
  const numColumns = 2;
  const maximumNumber = (100 -(currentQuestion * 5) - score)

  const renderItem = ({item, index}) => {
    console.log(item);
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => checkAnswer(item)}
        key={index}>
        <Text> {item} </Text>
      </TouchableOpacity>
    );
  };

  const Answer = () => {
    if (correct == "saad") {
      return;
    }
    if (correct == true) {
      return <Text style={styles.correct}> Correct! </Text>;
    }
    if (correct == false) {
      return <Text style={styles.sorry}> Sorry! </Text>;
    }
  };

  const checkAnswer = answer => {
    setCorrect(false);
    if (answer === Data[currentQuestion].correct_answer) {
      setScore(score + 5);
      setCorrect(true);
    }
  };

  const nextQuestion = () => {
    console.log(Data.length, 'length');
    console.log(currentQuestion, 'styles');
    if (currentQuestion < 19) {
      setCurrentQuestion(currentQuestion + 1);
      setCorrect("saad");
    } else {
      setCurrentQuestion(0);
      Alert.alert(`you have secured ${score} result`);
    }
  };

  const Star = () => {
    if (Data[currentQuestion].difficulty === 'easy') {
      return (
        <View style={styles.star}>
          <Icon name="star" color="black" size={15} />
          <Icon name="star-outlined" size={15} />
          <Icon name="star-outlined" size={15} />
          <Icon name="star-outlined" size={15} />
          <Icon name="star-outlined" size={15} />
        </View>
      );
    } else if (Data[currentQuestion].difficulty === 'medium') {
      return (
        <View style={styles.star}>
          <Icon name="star" color="black" size={15} />
          <Icon name="star" size={15} />
          <Icon name="star-outlined" size={15} />
          <Icon name="star-outlined" size={15} />
          <Icon name="star-outlined" size={15} />
        </View>
      );
    } else {
      return (
        <View style={styles.star}>
          <Icon name="star" color="black" size={15} />
          <Icon name="star" size={15} />
          <Icon name="star" size={15} />
          <Icon name="star-outlined" size={15} />
          <Icon name="star-outlined" size={15} />
        </View>
      );
    }
  };

  return (
    <View style={styles.Back}>
      <View
        style={{
          width: '100%',
          height: 20,
        }}>
        <View
          style={{
            display: 'flex',
            height: 20,
            width: `${(currentQuestion + 1) * 5}%`,
            backgroundColor: '#D3D3D3',
          }}></View>
      </View>
      <View className="Question-count">
        <Text style={styles.question}>
          Question {currentQuestion + 1} of 20
        </Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryex}>{Data[currentQuestion].category}</Text>
      </View>
      {Star()}
      <View style={styles.questionsa}>
        <Text style={styles.questionbas}>{Data[currentQuestion].question}</Text>
      </View>
      <View style={styles.saad}>
        <FlatList
          data={Data[currentQuestion].incorrect_answers}
          keyExtractor={(item, key) => item}
          renderItem={renderItem}
          numColumns={numColumns}
        />
      </View>
      {Answer()}
      <TouchableOpacity style={styles.next} onPress={nextQuestion}>
        <Text style={styles.Text}> Next Question </Text>
      </TouchableOpacity>
      <View style={styles.score}>
        <Text style={styles.safs}>{`Score: ${score}%`}</Text>
        <Text style={styles.safs}>{`Max Score: ${maximumNumber}%`}</Text>
      </View>
      <View
        style={{
          display: 'flex',
          position:"relative",
          height: 25,
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 5,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
            width: `${maximumNumber}%`,
            backgroundColor: '#D3D3D3',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: `${score}%`,
              height: '100%',
              backgroundColor: 'gray',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                height: '100%',
                width: `${Width}%`,
                backgroundColor: 'black',
              }}></View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  star: {
    flexDirection: 'row',
    marginTop: 5,
  },
  Back: {
    marginHorizontal: 30,
  },
  question: {
    fontFamily: 'Open Sans Bold',
    fontSize: 23,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  category: {
    marginTop: 3,
  },
  categoryex: {
    fontSize: 10,
  },
  stars: {
    marginTop: 5,
  },
  questionsa: {
    marginVertical: 23,
  },
  questionbas: {
    fontSize: 20,
    color: 'black',
  },
  button: {
    width: 150,
    height: 30,
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 5,
    marginRight: 29,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#D3D3D3',
  },
  correct: {
    marginVertical: 25,
    color: 'black',
    fontSize: 23,
    fontWeight: '500',
    alignSelf: 'center',
  },
  sorry: {
    marginVertical: 25,
    color: 'black',
    fontSize: 23,
    fontWeight: '500',
    alignSelf: 'center',
  },
  next: {
    alignSelf: 'center',
    marginTop: 23,
    width: 150,
    height: 35,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#D3D3D3',
  },
  Text: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  score: {
    paddingTop: 180,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  safs: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Question;
