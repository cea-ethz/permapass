import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { useCreation } from "../../context/CreationContext";
import { DigitalIdentifier } from "../../types";
import { router } from "expo-router";
import StepOption from "../../components/stepper/StepOption";
import StepTitle from "../../components/stepper/StepTitle";
import StepSubtitle from "../../components/stepper/StepSubtitle";
import { PrimaryButton } from "../../components/ui/buttons";

export default function Page() {
  const { state, dispatch } = useCreation();
  const [digitalIdentifier, setDigitalIdentifier] = useState<DigitalIdentifier | undefined>(
    state.userInput.digitalIdentifier
  );

  const isInvalid = !digitalIdentifier;

  const handleNext = async () => {
    dispatch({ type: "USER_INPUT_CHANGED", digitalIdentifier: digitalIdentifier! });
    dispatch({ type: "RESET_CREATION_STATE" });
    router.push("/create/04-summary-and-creation");
  };

  return (
    <View style={styles.container}>
      <View>
        <StepTitle text="Now, pick a digital identifier." highlight="digital identifier" />
        <StepSubtitle text="By assigning a construction product to a digital identifier, we can link it to its previously created passport data." />
        {state.userInput.dataCarrier == "nfc" ? (
          <StepOption
            title="Physical Backed Token"
            subtitle="Physical Backed Token (PBT) is a new Ethereum token standard based off of ERC721. It ties a physical item to a digital token."
            isSelected={digitalIdentifier == "pbt"}
            onPress={() => setDigitalIdentifier("pbt")}
          />
        ) : (
          <StepOption
            title="Non-Fungible Token"
            subtitle="Non-Fungible Tokens (NFTs) are unique digital assets on a blockchain."
            isSelected={digitalIdentifier == "nft"}
            onPress={() => setDigitalIdentifier("nft")}
          />
        )}
        <StepOption
          title="Decentralized Identifier"
          subtitle="Decentralized Identifiers (DIDs) are digital identifiers that enable verifiable, self-sovereign identity without a centralized authority."
          isSelected={digitalIdentifier == "did"}
          onPress={() => setDigitalIdentifier("did")}
        />
      </View>
      <PrimaryButton title="Continue" onPress={handleNext} disabled={isInvalid} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});