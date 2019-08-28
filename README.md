# Ultrasound-demo

Inter-device communication under airplane mode demo. Made for my [Hack Club](https://wootton.hackclub.com) recruiting season 2019-2020.

This demo is a simple wrapper of the library [quiet.js](https://github.com/quiet/quiet-js). Major code came from the [demos](https://github.com/quiet/quiet-js/tree/master/examples/text) of the library.

*[My Own Demo Video](https://slack-files.com/T0266FRGM-FMSGY5VAL-edbc0925ba)*

This demo is designed to work under situations without a stable internet connection. I have no idea why I wrote the express routes instead of running a simple server with three folders, yet here I am. It took me about 30 minutes to get this whole thing working, so roast lightly on the code 💖

## License

Quiet and Quiet-js are licensed under 3-clause BSD. Quiet-js's emscripten-compiled output includes a statically-linked copies of [liquid dsp](http://liquidsdr.org/) and [libjansson](http://www.digip.org/jansson/), both of which are licensed under the MIT license. For more information on Quiet-js's 3rd party licenses, consult [LICENSE-3RD-PARTY](https://github.com/quiet/quiet-js/blob/master/LICENSE-3RD-PARTY).

The portion of the code that I wrote is released under [the MIT license](LICENSE).