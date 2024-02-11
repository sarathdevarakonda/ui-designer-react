import Loadable from "react-loadable";

const widgets = {
    dynamicchunk43: Loadable({
      loader: () => import("./widgets/sydney_weather"),
      loading: () => <div>Loading Scripts...</div>,
    }),
    dynamicchunk543: Loadable({
      loader: () => import("./widgets/tokyo_weather"),
      loading: () => <div>Loading Scripts...</div>,
    }),
    dynamicchunk31: Loadable({
            loader: () => import("./widgets/amsterdam_weather"),
            loading: () => <div>Loading Scripts...</div>,
        }),
    dynamicchunk187: Loadable({
            loader: () => import("./widgets/zurich_weather"),
            loading: () => <div>Loading Scripts...</div>,
        }),
    //   newyork: Loadable({
    //       loader: () => import("./widgets/newyork_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     paris: Loadable({
    //       loader: () => import("./widgets/paris_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     london: Loadable({
    //       loader: () => import("./widgets/london_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     beijing: Loadable({
    //       loader: () => import("./widgets/beijing_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     cairo: Loadable({
    //       loader: () => import("./widgets/cairo_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     mumbai: Loadable({
    //       loader: () => import("./widgets/mumbai_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
        
    //     moscow: Loadable({
    //       loader: () => import("./widgets/moscow_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     toronto: Loadable({
    //       loader: () => import("./widgets/toronto_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     istanbul: Loadable({
    //       loader: () => import("./widgets/istanbul_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
        
       
    //     berlin: Loadable({
    //       loader: () => import("./widgets/berlin_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     bangkok: Loadable({
    //       loader: () => import("./widgets/bangkok_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
       
    //     seoul: Loadable({
    //       loader: () => import("./widgets/seoul_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     nairobi: Loadable({
    //       loader: () => import("./widgets/nairobi_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     losangeles: Loadable({
    //       loader: () => import("./widgets/losangeles_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     dubai: Loadable({
    //       loader: () => import("./widgets/dubai_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     madrid: Loadable({
    //       loader: () => import("./widgets/madrid_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     rome: Loadable({
    //       loader: () => import("./widgets/rome_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     jakarta: Loadable({
    //       loader: () => import("./widgets/jakarta_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     vancouver: Loadable({
    //       loader: () => import("./widgets/vancouver_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     athens: Loadable({
    //       loader: () => import("./widgets/athens_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     stockholm: Loadable({
    //       loader: () => import("./widgets/stockholm_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     prague: Loadable({
    //       loader: () => import("./widgets/prague_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     warsaw: Loadable({
    //       loader: () => import("./widgets/warsaw_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     barcelona: Loadable({
    //       loader: () => import("./widgets/barcelona_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
        
    //     lima: Loadable({
    //       loader: () => import("./widgets/lima_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     dublin: Loadable({
    //       loader: () => import("./widgets/dublin_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     vienna: Loadable({
    //       loader: () => import("./widgets/vienna_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     budapest: Loadable({
    //       loader: () => import("./widgets/budapest_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     zurich: Loadable({
    //       loader: () => import("./widgets/zurich_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     auckland: Loadable({
    //       loader: () => import("./widgets/auckland_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     brasilia: Loadable({
    //       loader: () => import("./widgets/brasilia_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     copenhagen: Loadable({
    //       loader: () => import("./widgets/copenhagen_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     helsinki: Loadable({
    //       loader: () => import("./widgets/helsinki_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     oslo: Loadable({
    //       loader: () => import("./widgets/oslo_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     riyadh: Loadable({
    //       loader: () => import("./widgets/riyadh_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     santiago: Loadable({
    //       loader: () => import("./widgets/santiago_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     kiev: Loadable({
    //       loader: () => import("./widgets/kiev_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     manila: Loadable({
    //       loader: () => import("./widgets/manila_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     bogota: Loadable({
    //       loader: () => import("./widgets/bogota_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     caracas: Loadable({
    //       loader: () => import("./widgets/caracas_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     warsaw: Loadable({
    //       loader: () => import("./widgets/warsaw_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     islamabad: Loadable({
    //       loader: () => import("./widgets/islamabad_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
    //     bucharest: Loadable({
    //       loader: () => import("./widgets/bucharest_weather"),
    //       loading: () => <div>Loading Scripts...</div>,
    //     }),
        
        dynamicchunk150: Loadable({
          loader: () => import("./widgets/doha_weather"),
          loading: () => <div>Loading Scripts...</div>,
        }),
}

const  getWidget = (city) => {

    const LoadableWeather = widgets[city]
    return <LoadableWeather />;
}

export { getWidget }