
function ColorSwatch({onSelectColor}) {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff',
    '#000000', // Black
    '#FFFFFF', // White
    '#FFFF00', // Yellow
    '#800000', // Maroon
    '#008000', // Green (Dark Green)
    '#000080', // Navy
    '#808000', // Olive
    '#800080', // Purple
    '#008080', // Teal
    '#808080', // Gray
];


  return (
    <div>
      {colors.map((color) => (
        <div
          key={color}
          style={{
            backgroundColor: color,
            width: '50px',
            height: '50px',
            display: 'inline-block',
            margin: '5px',
            cursor: 'pointer',
            borderRadius: "15px",
            border:"1.5px solid black"
          }}
          onClick={() => onSelectColor(color)}
        ></div>
      ))}
    </div>
  )
}

export default ColorSwatch
