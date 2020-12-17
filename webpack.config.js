const path = require("path");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
  //entry-point: archivo principal o punto de entrada que leera webpack
  entry: "./src/index.js",
  //hacia donde enviaremos nuestros archivo o proyecto ya compilado
  output: {
    path: path.resolve(__dirname, "dist"), //dist la carpeta de "produccion"
    filename: "bundle.js", //nombre del archiv resultante o compilado de nuesrtra app
    publicPath: "/", //la raiz del proyecto es el public path
  },
  //indicamos las extesiones de archivos que vamos a utilizar en el proyecto
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      //esta regla va identificar los archivos con extensio .js o .jsx y trabajará con el babel-loader. Excluimos todos los archivos de node
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        //indicamos el uso del loader que necesitamos para procesar nuestros archivo
        use: {
          loader: "babel-loader",
        },
      },
      //regla para identificar y trabajar con html
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    //creamos uns instancia de nuestro plugin
    new HtmlWebpackPlugin({
      //archivo donde va a inyectar el html
      template: "./public/index.html",
      //archivo final producido
      filename: "./index.html",
    }),
    new WebpackPwaManifestPlugin({
      //definimos el objeto de configuracion
      name: "Petgram - Tu app de fotos de mascotas",
      short_name: "Petgram",
      description: "Con Petgram puedes encontrar fotos de animales domésticos",
      background_color: "#fff",
      theme_color: "#b1a",
      icons: [
        {
          src: path.resolve(__dirname, "src/assets/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    //generamos un service worker
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: "service-worker.js",
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5000000,
      //indicamos lo que el SW necesita hacer cache
      runtimeCaching: [
        {
          //desde esta url cargamos las imagenes
          urlPattern: new RegExp(
            "https://(res.cloudinary.com|images.unplash.com)"
          ),
          //CacheFirst-> primero verificarar si el recurso esta en el cache, si no es asi lo recuperar
          handler: "CacheFirst",
          options: {
            cacheName: "images",
          },
        },
        //chache para la api
        {
          //url del servidor que contiene nuestra api o backend
          urlPattern: new RegExp(
            "https://petgram-server-api-barcvilla-l8ya7qy99.vercel.app"
          ),
          //CacheFirst-> primero verificarar si el recurso esta en el cache, si no es asi lo recuperar
          handler: "NetworkFirst",
          options: {
            cacheName: "api",
          },
        },
      ],
    }),
  ],
  //creamos un servidor de trabajo local y ver los cambios en la app
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    port: 3000,
  },
};
