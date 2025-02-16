import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="absolute inset-0 backdrop-blur">
      <div className="w-full flex justify-center mt-6">
        <div className="space-y-1">
          <LoaderCircle className="animate-spin" size={40} />
          <p>Loading</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
