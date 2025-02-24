import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
      <div className="absolute inset-0 backdrop-blur z-10 flex justify-center items-center mt-6">
        <div className="space-y-1 text-white/90">
          <LoaderCircle className="animate-spin" size={40} color="white"  />
          <p>Loading</p>
        </div>
      </div>
  );
};

export default Loading;
