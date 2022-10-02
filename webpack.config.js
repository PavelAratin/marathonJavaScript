const { resolve } = require("path");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');//плагин для работы с html
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//плагин для css(конвертирует css в один файл)

//переменная для определения режима разработки
const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development';

//переменная для определения для каких браузеров проводится сборка и используем автопрефиксы  и свойства
const target = devMode ? 'web' : 'browserslist';//для 'browserslist' создан специальный файл browserlistrc

//если режим разрабоки то добавляем соурсмапы
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  //описанные переменные для определения режима разрабокт добавляем в обьект как свойства
  mode,
  target,
  devtool,
  //настройка дев сервера(подключение лоадеров/плагинов не нужно)
  devServer: {
    port: 3000,
    open: true,
    hot: true//отключить если будут какие то баги
  },
  //точка входа(исходники)
  entry: ["@babel/polyfill", path.resolve(__dirname, 'src', 'index.js')],
  //точка выхода(готовый код)
  output: {
    //путь до точки выхода
    path: path.resolve(__dirname, 'dist'),
    //очистка папки дист
    clean: true,
    //название готовой папки [contenthash] - добавляет хеш для измененныъ файлов
    filename: 'index.[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]'

  },
  //в свойстве плугинс описываем работу с плагинами,они описываеются в массиве
  plugins: [
    //для плагина HtmlWebpackPlugin рекомендуется прописать путь до него   
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    //плагин для работы с css (указываем как будтет называется файл css)
    new MiniCssExtractPlugin({
      filename: 'index.[contenthash].css'
    })
  ],
  //здусь установим лоадер для автомаической перезагрузки браузра после изменения html
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'//сам лоадер webpack его находит сам(но еще нужно за ним следить тоесть заимпортить в index.js)
      },
      //лоадеры css (позволяет работать css через js (так же css нужно импортить в js))
      {
        test: /\.(c|sa|sc)ss$/i, //можем работать с css,scss,sass (для них нужно установить лоадеры, я установлю только scss)
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: 'postcss-loader',
            //настройка автопрефиксера
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')]
              }
            }
          },
          "sass-loader"
        ],
        //два вышестоящий лоадера добавляют css прмо в html что явл. плохой практикой
        //что бы это исправить нам понадобиться MiniCssExtractPlugin (он конвертирует css в один файл)
      },
      //шрифты
      {
        test: /\.woff2?$/i,//поддерживаем только расширения woff и woff2
        type: 'asset/resource',
        generator: {//этот генератор будут складывать шрифты в папку(иначе все свалиться в дист)
          filename: 'fonts/[name][ext]'
        }
      },
      //картинки
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,//поддерживаем только расширения woff и woff2
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            },
          }
        ],
        type: 'asset/resource',
      },
      //js-loader babel
      //async/await могут не работать по этому нужно установить babbel/polyfill и импортировать в index.js
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }

}