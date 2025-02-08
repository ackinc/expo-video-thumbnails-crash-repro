import React from "react";
import { Button, Image, Text, View } from "react-native";
import * as VideoThumbnails from "expo-video-thumbnails";

const videoUri =
  "https://www.sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4";

export default function Index() {
  const [thumb, setThumb] = React.useState<string | null>(null);
  const [working, setWorking] = React.useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Generate thumb"
        disabled={working}
        onPress={generateThumbnail}
      />
      {thumb ? <Text>{thumb}</Text> : null}
      {thumb ? (
        <Image source={{ uri: thumb }} height={100} width={100} />
      ) : null}
    </View>
  );

  async function generateThumbnail() {
    setWorking(true);
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(videoUri);
      setThumb(uri);
    } finally {
      setWorking(false);
    }
  }
}
