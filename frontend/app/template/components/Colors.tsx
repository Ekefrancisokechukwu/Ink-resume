const colors = [
  "#FF5733", // Vibrant Orange
  "#33FF57", // Bright Green
  "#3357FF", // Vivid Blue
  "#FF33A1", // Pinkish Red
  "#FFC300", // Bright Yellow
  "#DAF7A6", // Light Green
  "#C70039", // Deep Red
  "#900C3F", // Maroon
  "#581845", // Dark Purple
  "#2ECC71", // Medium Green
  "#3498DB", // Sky Blue
  "#9B59B6", // Purple
  "#E74C3C", // Coral
  "#1ABC9C", // Aqua Green
  "#F39C12", // Orange Yellow
  "#D35400", // Burnt Orange
  "#34495E", // Blue Gray
  "#16A085", // Dark Aqua
  "#27AE60", // Emerald Green
  "#8E44AD", // Violet
];

const Colors = () => {
  return (
    <div>
      <button className="block text-start w-full font-semibold text-sm text-neutral-700">
        Colors
      </button>
      <div>
        <div className="py-3 flex items-center flex-wrap gap-2">
          {colors.map((color, i) => {
            return (
              <button
                key={i}
                style={{ background: color }}
                className="inline-block hover:ring-2 ring-neutral-300  size-5 rounded-md"
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Colors;
