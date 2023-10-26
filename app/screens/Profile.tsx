import { setDoc } from "firebase/firestore";
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { FIREBASE_DB } from "../../firebaseConfig";

const Profile = () => {
    const [name, setName] = useState("");

    const Submit =async () => {
        
        try{
            const response = await setDoc(doc(FIREBASE_DB, "profile", ))
        }
    }

    return(
        <View>
            <Text>Profile tab</Text>
            
            <Text>Name</Text>
            <TextInput
                value={name}
                placeholder="Name"
                onChangeText={setName}
            />
            <Text>Address</Text>
            <TextInput
                placeholder="Address"
            />
            <Text>Occupation</Text>
            <TextInput
                placeholder="Occupation"
            />
            <Text>Tax Details</Text>
            <TextInput
                placeholder="Tax details"
            />
            <Button title='Submit' onPress={Submit}/> 
        </View>
    )
}

export default Profile;