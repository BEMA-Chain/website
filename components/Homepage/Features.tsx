import { GrMoney } from "react-icons/gr";
import { RiNftLine, RiNftFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import { GiProfit } from "react-icons/gi";

const staggerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2, // Adjust the delay as needed
    },
  },
};

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-25 bg-black flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-gray-500">
                Discover Our Unique Features
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                Our features are designed to enhance your productivity and
                streamline your workflow.
              </p>
            </div>
            <div className="w-full max-w-full space-y-4 mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 sm:grid-cols-1">
                <div data-aos="zoom-in" data-aos-duration="3000">
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <GiProfit className="text-white h-8 w-8 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      Fan-Artists Tipping
                    </h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      Directly support your favorite artists by tipping them,
                      fostering a closer connection between fans and musicians.
                    </p>
                  </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="3000">
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <GrMoney className="text-white h-8 w-8 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      Blockchain Royalty System
                    </h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      Ensure fair and transparent royalty distribution using
                      blockchain technology, revolutionizing the music industry
                      compensation model.
                    </p>
                  </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="3000">
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <BsCashCoin className="text-white h-8 w-8 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      Artist Tokenization & Fanbase Model
                    </h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      Empower artists by tokenizing their work and building a
                      sustainable fanbase ecosystem through blockchain
                      innovation.
                    </p>
                  </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="9000">
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <GiReceiveMoney className="text-white h-8 w-8 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      Loyalty Reward System
                    </h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      Recognize and reward loyal users with exclusive perks,
                      enhancing user engagement and fostering a vibrant music
                      community.
                    </p>
                  </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="9000">
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <BsCashCoin className="text-white h-8 w-8 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      Earn-As-you-Stream Models
                    </h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      Allow users to earn rewards while enjoying music, creating
                      an interactive and incentivized streaming experience for
                      the community.
                    </p>
                  </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="9000">
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <RiNftFill className="text-white h-8 w-8 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      NFT Marketplace
                    </h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      Explore and trade unique music-related NFTs, providing
                      artists and fans with new opportunities in the digital
                      collectibles space
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
