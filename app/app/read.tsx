import { Button, Text, View } from "react-native";
import { usePassport } from "../hooks/usePassport";
import { usePassportMetadata } from "../hooks/usePassportMetadata";
import { useReadQueryParams } from "../hooks/useReadQueryParams";
import { usePassportHistory } from "../hooks/usePassportHistory";
import { api } from "../lib/web-api";
import { nftRegistry } from "../lib/blockchain/nftRegistry";
import { didRegistry } from "../lib/blockchain/didRegistry";

export default function Page() {
  const { arweaveTxid } = useReadQueryParams();
  const { passportMetadata, isLoading: isMetadataLoading, error: metadataError } = usePassportMetadata({ arweaveTxid });
  const { passport, isLoading: isPassportLoading, error: passportError } = usePassport({ passportMetadata });
  const { passportHistory } = usePassportHistory({ passportMetadata });
  // const [passportHistory, setPassportHistory] = useState<Passport[]>([]);

  const update = async () => {
    if (!passportMetadata) {
      console.log("No passport metadata");
      return;
    }
    if (!passport) {
      console.log("No passport");
      return;
    }

    const txid = await api.arweave.uploadPassport({
      name: `${passport.name} UPDATED`,
      condition: `${passport.condition} UPDATED`,
    });
    const uri = api.arweave.fromTxidToURI(txid);

    switch (passportMetadata.type) {
      case "nft":
        await nftRegistry.updateTokenURI(passportMetadata.tokenId, uri);
        break;
      case "did":
        await didRegistry.updateDIDService(passportMetadata.did, uri);
        break;
      default:
        throw new Error(`Unknown passport type`);
    }

    console.log("Passport updated");
  };

  // const readHistory = async () => {
  //   if (!passportMetadata) {
  //     console.log("No passport metadata");
  //     return;
  //   }
  //   if (!passport) {
  //     console.log("No passport");
  //     return;
  //   }

  //   switch (passportMetadata.type) {
  //     case "nft":
  //       let currentPassport = passport;

  //       setPassportHistory((history) => [...history, currentPassport]);

  //       const logs = await publicClient.getContractEvents({
  //         chainId: hardhat.id,
  //         address: deployments[hardhat.id].address,
  //         abi: deployments[hardhat.id].abi,
  //         eventName: "TokenURIChanged",
  //         args: {
  //           tokenId: passportMetadata.tokenId,
  //           uri: p,
  //         },
  //       });

  //       break;
  //     case "did":
  //       console.log("to implement");
  //       break;
  //     default:
  //       throw new Error(`Unknown passport type`);
  //   }
  // };

  if (isMetadataLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading metadata...</Text>
      </View>
    );
  }

  if (metadataError) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error Metadata: {metadataError}</Text>
      </View>
    );
  }

  if (isPassportLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading passport...</Text>
      </View>
    );
  }

  if (passportError) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error Passport: {passportError}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* {hasError != "" && <Text>Error: error occurred, {hasError}</Text>} */}
      <Text>Passport: {JSON.stringify(passport)}</Text>
      <Button title="Update" onPress={update} />
      {/* <Button title="Read History" onPress={readHistory} /> */}
      {/* <Text>Passport History:</Text> */}
      {passportHistory.map((passport, index) => (
        <Text key={index}>PassportChange: {JSON.stringify(passport)}</Text>
      ))}
    </View>
  );
}
