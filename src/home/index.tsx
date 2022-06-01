import { useAppDispatch, useAppSelector } from "@/hooks";
import { setAsyncRandomToken } from "@/store/module/auth";
import "./index.css";

function Home() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  return (
    <>
      <div className="flex items-center space-x-2 text-base">
        <h4 className="font-semibold text-slate-900">Contributors</h4>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
          {auth.status}
          <br />
          {auth.token}
        </span>
      </div>
      <div className="mt-3 flex -space-x-2 overflow-hidden">
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="static/svg/square-big.svg"
          alt=""
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="static/svg/square-big.svg"
          alt=""
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="static/svg/square-big.svg"
          alt=""
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="static/svg/square-big.svg"
          alt=""
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="static/svg/square-big.svg"
          alt=""
        />
      </div>
      <div className="mt-3 text-sm font-medium">
        <a href="#" className="text-blue-500">
          + 198 others
        </a>
        <br />
        <button
          type="button"
          onClick={() => {
            dispatch(setAsyncRandomToken());
          }}
        >
          设置token
        </button>
      </div>
    </>
  );
}

export default Home;
