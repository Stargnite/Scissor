import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./trimmer.css";
import "./resultModal.css";
import CopyToClipboard from "react-copy-to-clipboard";
import LoadingGIF from "../../assets/loadingGIF.gif";
import { QRCodeCanvas } from "qrcode.react";
import ReactModal from "react-modal";
import { GrClose } from "react-icons/gr";
// import ReactGA from "react-ga";
import { db } from "./../Authentication/Firebase/firebase";
import { doc, updateDoc, DocumentSnapshot, getDoc } from "firebase/firestore";
// import { AuthContext } from "../../store/auth-context";

// const authCtx = useContext(AuthContext)

type resulModalProps = {
  isLoading: boolean;
  shortLink: string;
  isOpen: boolean;
  closeModal: () => void;
};

const ResultModal = ({
  isLoading,
  shortLink,
  isOpen,
  closeModal,
}: resulModalProps) => {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState(shortLink);
  const qrRef = useRef<HTMLInputElement>(null);
  console.log(url);

  // ReactGA.event({
  //   category: shortLink,
  //   action: "click action",
  //   label: "click label",
  //   // value: shortLink,
  // });

  const downloadQRCode: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    let canvas = qrRef.current!.querySelector("canvas");
    let image = canvas!.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setUrl("");
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={shortLink}
      size={150}
      bgColor={"#CBD6E0"}
      level={"H"}
    />
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const userId: string | null = localStorage.getItem("userId");
  // useEffect(() => {
  async () => {
    if (userId) {
      const docRef = doc(db, "users", userId);
      const snapshot: DocumentSnapshot = await getDoc(docRef);
      const linksArray: string[] = snapshot.data()?.generated_links as string[];

      const updatedList = { ...linksArray, shortLink };
      await updateDoc(docRef, { generated_links: updatedList });
      console.log(updatedList);
      // updateDoc(docRef, updatedList);
    }
  };
  // }, [shortLink]);

  if (isLoading) {
    return (
      <div className="trim_result">
        <img src={LoadingGIF} className="loading_shrt_url" alt="Loading..." />
      </div>
    );
  }

  return (
    <div className="trim_result">
      {shortLink ? (
        <ReactModal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"
          overlayClassName="result_overlay"
          className="result_modal"
        >
          <button onClick={closeModal} className="close_modal">
            <GrClose />
          </button>
          <div className="qrcode_pic" ref={qrRef}>
            {qrcode}
          </div>
          <div className="short-url">
            <input
              type="text"
              value={shortLink}
              // onChange={qrCodeEncoder}
            />
            <CopyToClipboard
              text={shortLink}
              onCopy={() => {
                setCopied(true);
              }}
            >
              <button
                className={copied ? "copied" : ""}
                onClick={(e) => e.preventDefault()}
              >
                {copied ? "Copied!!" : "Copy"}
              </button>
            </CopyToClipboard>
          </div>
          <div className="down-analytics">
            <div className="download_qr">
              <button onClick={downloadQRCode}>Download QR code</button>
            </div>
            <div className=" analytics">
              <Link to="/analytics">
                <button>View Analytics</button>
              </Link>
            </div>
          </div>
        </ReactModal>
      ) : (
        ""
      )}
    </div>
  );
};

export default ResultModal;
