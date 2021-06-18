import React from 'react'
import { View, Text ,Button,StyleSheet,Image} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const Next = ({...props}) => (
    <Button
    title="Next"
    color='#000000'
    {...props}
    />
);

const Skip = ({...props}) => (
    <Button
    title="Skip"
    color='#000000'
    {...props}
    />
);

const Done = ({...props}) => (
    <Button
    title="Done"
    color='#000000'
    {...props}
    />
);

 const Boarding = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        onSkip={() => navigation.replace("Switch")}
        onDone={()=> navigation.navigate("Switch")}
        pages={[
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/Main.png')} style={{width:100,height:100}} />,
                title: 'Collage Insights',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/Main.png')} style={{width:100,height:100}}  />,
                title: 'Onboarding 2',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/Main.png')} style={{width:100,height:100}}  />,
                title: 'Onboarding 3',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
        ]}
        />
    )
}

export default Boarding;

const Styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})