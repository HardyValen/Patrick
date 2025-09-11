import { unifiedPipeline as processor} from '$lib'

const content = [
  `
  <div class="overflow-auto">

  | test | test | test | test |
  |:-----|:----:|------|-----:|
  |somethingsomething__|something__|something__ lipsum|somethingsomething_|
  |somethingsomething__|something__|something__ lipsum|somethingsomething_|
  |somethingsomething__|something__|something__ lipsum|somethingsomething_|
  |somethingsomething__|something__|something__ lipsum|somethingsomething_|
  |somethingsomething__|something__|something__ lipsum|somethingsomething_|
  |somethingsomething__|something__|something__ lipsum|somethingsomething_|
  |somethingsomething__|something__|something__ lipsum|somethingsomething_|

  </div>

  # header 1
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  # header 1
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  ## header 2
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  ### header 3
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  #### header 4
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  ##### header 5
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  ###### header 6
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  <u>underline</u> _italic_ __bold__ ~~strikethrough~~

  In the 1840s,
  [Urbain Le Verrier](https://wikipedia.org/wiki/Urbain_Le_Verrier)
  used Newtonian mechanics to predict the position of the
  then-undiscovered planet
  [Neptune](https://wikipedia.org/wiki/Neptune)
  after analyzing perturbations in the orbit of
  [Uranus](https://wikipedia.org/wiki/Uranus).

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  www.google.com

  ***

  ![Tux, the Linux mascot](https://placehold.co/1500x1500?text=Placeholder)

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.
  `
].join("\n");
const transformedContent = await processor.process(content);

export function load() {
  return {
    content: String(transformedContent)
  }
}
