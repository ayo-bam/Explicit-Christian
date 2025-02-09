import { useEffect, useState } from "react";
import { createClient, createRecordingButton } from "@loomhq/record-sdk";

// Define types for the Loom client and video
type LoomClient = ReturnType<typeof createClient>;
type LoomVideo = {
  sharedUrl: string;
  embeddedUrl: string;
  title: string;
};

const LOOM_PUBLIC_APP_ID = "YOUR_PUBLIC_APP_ID"; // Replace with your actual Loom Public App ID

const LoomRecorder = () => {
  const [client, setClient] = useState<LoomClient | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeLoom = async () => {
      try {
        const loomClient = await createClient({ publicAppId: LOOM_PUBLIC_APP_ID });
        setClient(loomClient);
        setError(null);
      } catch (err) {
        setError("Failed to initialize Loom SDK");
        console.error(err);
      }
    };

    initializeLoom();

    // Cleanup function
    return () => {
      if (client) {
        // Add any necessary cleanup for the Loom client
      }
    };
  }, []);

  const startRecording = async () => {
    if (!client) {
      setError("Loom SDK not initialized yet");
      return;
    }

    try {
      // Create a recording button instance using the Loom client
      const recordingButton = createRecordingButton(client, {
        onInsertClicked: (video: LoomVideo) => {
          // When recording is completed, set the video URL
          setVideoUrl(video.sharedUrl);
        },
      });
      // Simulate a click on the recording button to start recording
      recordingButton.click();
    } catch (err) {
      setError("Failed to start recording");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Loom Recorder</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={startRecording}>Start Recording</button>
      {videoUrl && (
        <div>
          <p>Recording Completed:</p>
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            View Video
          </a>
        </div>
      )}
    </div>
  );
};

export default LoomRecorder;