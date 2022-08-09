import React from "react";

const IframeSection = () => {
  return (
    <>
      <div>
        <iframe
          title="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6145.038801199637!2d-0.5864158050042501!3d39.638023804389654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd605f917d66f7c3%3A0x2a41562dcf2334c!2sWarrior%204x4!5e0!3m2!1ses!2sar!4v1620670962718!5m2!1ses!2sar"
          frameborder="0"
          style={{ height: "200px", width: "100%", overflow: "hidden", marginTop: "60px" }}
          scrolling="no"
        ></iframe>
      </div>
    </>
  );
};

export default IframeSection;
