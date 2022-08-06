import { FC } from "react";
import { IQuote } from "../../interfaces/quote";

interface Props {
  quote?: IQuote;
}

export const CardQuote: FC<Props> = ({ quote }) => {
  return (
    <div className="card w-auto bg-base-100 shadow-xl text-lg">
      <div className="card-body ">
        <h2 className="">
          <strong>"{quote?.quote}"</strong>
        </h2>
      </div>
      <div className="flex flex-col items-end p-5">
        <p className="font-semibold">{quote?.author}</p>
        <p className="font-semibold">{quote?.series}</p>
        
      </div>
    </div>
  );
};
