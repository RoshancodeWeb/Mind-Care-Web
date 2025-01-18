import React from 'react'

const LiveChat = () => {
  return (
    <div className=" p-6   w-full lg:w-3/4 xl:w-2/3 mx-auto mt-8">
      <h2 className="text-3xl text-center md:text-3xl font-bold text-black mb-2">
        Online Live <span className="text-orange-500">Chat</span>
      </h2>
      <p className="text-xl md:text-xl text-center font-medium text-black mb-4">
        24/7 confidential mental health support via instant chat
      </p>

      <div className="space-y-4">
        <div className="flex items-start">
          <span className="text-orange-500 mr-2">●</span>
          <p className="text-black lg:text-xl">
            <strong>Instant Access:</strong> With just a click, you can connect with a trained mental health professional or counselor through our secure live chat platform. No appointments are needed, and support is available 24/7.
          </p>
        </div>

        <div className="flex items-start">
          <span className="text-orange-500 mr-2">●</span>
          <p className="text-black lg:text-xl">
            <strong>Confidential Conversations:</strong> Your privacy is our top priority. All live chat sessions are encrypted, ensuring that your conversations remain confidential and secure.
          </p>
        </div>

        <div className="flex items-start">
          <span className="text-orange-500 mr-2">●</span>
          <p className="text-black lg:text-xl">
            <strong>Real-Time Support:</strong> Whether your feeling overwhelmed, anxious, or just need someone to listen, our live chat provides immediate emotional support.
          </p>
        </div>

        <div className="flex items-start">
          <span className="text-orange-500 mr-2">●</span>
          <p className="text-black lg:text-xl">
            <strong>Flexible Options:</strong> You can choose to chat anonymously if you prefer. Our live chat service is designed to be as flexible as possible, allowing you to reach out on your terms.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LiveChat