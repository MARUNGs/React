import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myCoin, setMyCoin] = useState(0);

  const onChangeInput = (e) => {
    setMyCoin(e.target.value);
  };

  // 코인 API 1회 호출
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  // 기능 개선. 현재 보유 코인보다 초과인 코인은 제외하고 보여줄 것.
  console.log(myCoin);

  return (
    <div>
      <h1>이것은 코인이다! (총 {coins.length}개)</h1>

      {/* loading 중이면 안내메세지를, loading이 끝나면 코인 리스트를 보여주기 */}
      {loading ? (
        <strong>로딩중입니다...</strong>
      ) : (
        <>
          <input
            value={myCoin}
            onChange={onChangeInput}
            type="number"
            placeholder="현재 보유한 코인을 입력하세요..."
          />
          <select>
            {
              // 코인에 들어있는 고유ID값을 인덱스 삼아서 사용하자.
              coins.map((coin) =>
                Math.round(coin.quotes.USD.price) > myCoin ? (
                  <option key={coin.id}>
                    {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
                  </option>
                ) : null
              )
            }
          </select>
        </>
      )}
    </div>
  );
}

export default CoinTracker;
