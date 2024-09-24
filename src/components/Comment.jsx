function Comment({ username, comment }) {
  return (
    <div className="comment flex flex-col gap-1 bg-[#e3e6f36c] p-4 w-1/2 rounded-md mb-2">
      <div className="profile">
        <div className="p-3 rounded-full w-8 h-8 bg-[#088179cf] flex items-center justify-center">
          <span className="text-white">
            {username.slice(0, 1).toUpperCase()}
          </span>
        </div>
        <h5 className="text-gray-500 text-x ">{username}</h5>
      </div>
      <p className="text-gray-500 font-light text-xl mt-0 ml-8">{comment}</p>
    </div>
  );
}

export default Comment;
