# RetroArch Cheat File Generator

This project is a web-based tool to generate and modify cheat files (`.cht`) for RetroArch. Users can easily create, preview, and download `.cht` files, as well as upload existing files to modify their contents.

![Project Screenshot](https://krishp08.github.io/Retroarch-cheat-maker/Images/Screenshot.png)

## Features

- **Console & Game Name**: Add details to personalize your `.cht` file.
- **Add Cheats**: Define cheat descriptions, codes, and enable/disable options.
- **Preview Cheats**: See a live preview of how cheats are saved in the `.cht` file.
- **Download .cht Files**: Save the generated cheats directly as a `.cht` file.
- **Upload & Edit .cht Files**: Upload existing `.cht` files and modify them.

## How It Works

1. Enter the console and game name.
2. Fill in cheat details:
   - Description
   - Code (use `+` instead of spaces)
   - Enable or disable the cheat.
3. Click "Add Cheat" to include it in the file.
4. View the live preview of the `.cht` file format.
5. Download the `.cht` file with the specified console and game name.
6. Optionally, upload a `.cht` file to edit its contents.

## File Format Example

```
cheats = 2

cheat0_desc = "Unlimited Rare candy in PC"
cheat0_code = "82025840+0044"
cheat0_enable = false

cheat1_desc = "EXP Share"
cheat1_code = "82025840+00B6"
cheat1_enable = false
```

## Technologies Used

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/RetroArch-Cheat-maker.git
   ```
2. Open `index.html` in any modern browser.

## Live Demo

Check out the live demo [here](https://krishp08.github.io/Retroarch-cheat-maker/).

## Contributing

Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy cheating! 😄

### Steps to Use
1. Save this as a `README.md` file in the root of your GitHub repository.
2. Replace `https://github.com/yourusername/RetroArch-Cheat-maker.git` with your actual repository URL. 

Let me know if you'd like additional customization!
