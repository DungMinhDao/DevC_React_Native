import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  Dimensions,
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';
import Button from './Button';
import ChoiceCard from './ChoiceCard';

const WIDTH_DEVICE = Dimensions.get('window').width;
const CHOICES = [
  {
    name: 'rock',
    uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png',
  },
  {
    name: 'paper',
    uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
  },
  {
    name: 'scissors',
    uri:
      'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
  },
]

const randomComputerChoice = () => 
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRoundOutcome = userChoice => {
  const computerChoice = randomComputerChoice().name;
  let result;
  
  if (userChoice === 'rock') {
    result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === 'paper') {
    result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === 'scissors') {
    result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
  }

  if (userChoice === computerChoice) result = 'Tie game!';
  return [result, computerChoice];
}



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamePrompt: 'Choose your weapon!',
      userChoice: CHOICES[0],
      computerChoice: CHOICES[0],
    }
  }

  onPress = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);
    // alert(`${result}, ${computerChoice}`);
  
    const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
    const newComputerChoice = CHOICES.find(choice => choice.name === compChoice);
  
    this.setState({
      gamePrompt: result,
      userChoice: newUserChoice,
      computerChoice: newComputerChoice,
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: WIDTH_DEVICE/20}}>{this.state.gamePrompt}</Text>
        <View style={styles.choicesContainer}>
          <ChoiceCard player="Player" choice={this.state.userChoice}/>
          <Text style={{ color: '#250902' }}></Text>
          <ChoiceCard player="Computer" choice={this.state.computerChoice}/>
        </View>
        {
          CHOICES.map(choice => {
            return <Button key={choice.name} name={choice.name} onPress={this.onPress}/>
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ebee'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: "center",
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: WIDTH_DEVICE/10,
    paddingBottom: WIDTH_DEVICE/10,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowRadius: 5,
    shadowOpacity: 0.25,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 4, width: 0 },
    elevation: 3,
  },
});
