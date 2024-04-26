import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { defaultStyles } from "../../styles";
import { useState } from "react";
import { NavigationButton } from "../../components/NavigationButton";
import { fromArweaveTxidToURI, uploadPassport } from "../../lib/arweave";

export default function Page() {
  const [arweaveURI, setArweaveURI] = useState("");
  const [name, setName] = useState("");
  const [condition, setCondition] = useState("good");

  async function onPress() {
    const txid = await uploadPassport({ name, condition });
    const uri = fromArweaveTxidToURI(txid);
    setArweaveURI(uri);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
        maxLength={16}
        autoCapitalize="none"
        autoFocus={true}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Upload To Arweave</Text>
      </TouchableOpacity>
      <Text>Response from Arweave:</Text>
      <Text>{arweaveURI}</Text>
      <NavigationButton
        to="/create/02a-use-nft"
        params={{
          arweaveURI,
        }}
      >
        Create NFT
      </NavigationButton>
      <NavigationButton
        to="/create/02b-use-did"
        params={{
          arweaveURI,
        }}
      >
        Create DID
      </NavigationButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.bgLight,
    flex: 0.95,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: defaultStyles.fontMedium,
    fontWeight: "200",
    color: defaultStyles.secondary,
    marginTop: 10,
    marginBottom: 5,
  },
  titleBold: {
    fontSize: defaultStyles.fontMedium,
    fontWeight: "400",
    color: defaultStyles.secondary,
    marginTop: 10,
    marginBottom: 5,
  },
  textHighlight: {
    color: defaultStyles.primary,
    fontWeight: "500",
  },
  input: {
    height: 50,
    borderWidth: 1,
    width: 250,
    borderColor: defaultStyles.secondary,
    borderRadius: 10,
    fontSize: defaultStyles.fontMedium,
    padding: 15,
    marginBottom: 10,
  },
  button: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    width: 200,
    height: 50,
    marginVertical: 5,
    backgroundColor: defaultStyles.bgLight,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: defaultStyles.bgDark,
    shadowRadius: 5,
    shadowOpacity: 0.2,
    borderRadius: 10,
  },
  buttonText: {
    color: defaultStyles.secondary,
    fontSize: defaultStyles.fontMedium,
    fontWeight: "bold",
  },
});