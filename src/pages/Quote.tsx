import { useEffect, useState } from "react";
import { CardQuote } from "../components/quote/CardQuote";
import { IQuote } from "../interfaces/quote";

const Quote = () => {
  const [quote, setQuote] = useState<IQuote | undefined>();
  useEffect(() => {
    const getQuote = async () => {
      const req = await fetch(
        "https://www.breakingbadapi.com/api/quote/random"
      );
      const res = await req.json();
      const { author, quote, series, quote_id } = res[0];
      setQuote({
        author,
        quote,
        series,
        quote_id,
      });
    };

    getQuote();
  }, []);

  return (
    <div className="flex justify-center m-auto">
      <CardQuote quote={quote} />
    </div>
  );
};

export default Quote;
