export default function FilterDistributor({ setLocation }) {
  return (
    <div className="mt-4 p-2 border-2 flex justify-between">
      <input
        className="p-2 focus:border-1 border-color-blue-500"
        type="text"
        name="location"
        placeholder="location"
      />
      <input
        className="p-2"
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        name="address"
        placeholder="address"
      />
      <button className="p-2 bg-blue-500 text-white">Search</button>
    </div>
  );
}
