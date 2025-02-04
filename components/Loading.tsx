import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="absolute inset-0 backdrop-blur-md w-full flex justify-center items-center z-50">
      <LoaderCircle className="animate-spin" size={60} />
    </div>
  );
};

export default Loading;
