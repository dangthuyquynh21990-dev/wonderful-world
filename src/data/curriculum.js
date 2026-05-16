export const units = [
  {
    id: 1,
    title: "Family and Friends",
    color: "blue",
    icon: "👨‍👩‍👧‍👦",
    vocabulary: [
      { word: "clever", pronunciation: "/ˈklevə(r)/", meaning: "intelligent; quick to learn and understand things", example: "She is very clever at solving problems." },
      { word: "funny", pronunciation: "/ˈfʌni/", meaning: "making you laugh; humorous and entertaining", example: "He tells funny jokes every day." },
      { word: "quiet", pronunciation: "/ˈkwaɪət/", meaning: "making little noise; calm and not talkative", example: "Lorena is quiet. She doesn't talk much." },
      { word: "loud", pronunciation: "/laʊd/", meaning: "making a lot of noise; talking a great deal", example: "Carla is loud. She talks all the time." },
      { word: "crazy about", pronunciation: "/ˈkreɪzi əˈbaʊt/", meaning: "to love something very much; very enthusiastic about", example: "They are crazy about building new things." },
      { word: "same", pronunciation: "/seɪm/", meaning: "not different from another; alike in every way", example: "Both twins have the same curly hair." },
      { word: "different", pronunciation: "/ˈdɪfrənt/", meaning: "not the same; unlike another person or thing", example: "Their personalities are very different." },
      { word: "curly", pronunciation: "/ˈkɜːli/", meaning: "having curves or spiral rings (describes hair or shape)", example: "She has beautiful curly hair." },
      { word: "straight", pronunciation: "/streɪt/", meaning: "not curly or wavy; going in one direction without bending", example: "He has long, straight black hair." },
      { word: "fair", pronunciation: "/feə(r)/", meaning: "light in colour; pale or blonde (describes hair or skin)", example: "The brothers have fair hair." },
      { word: "dark", pronunciation: "/dɑːk/", meaning: "close to black in colour; not light or pale", example: "My best friend has dark, curly hair." },
      { word: "long", pronunciation: "/lɒŋ/", meaning: "measuring a great distance from one end to the other", example: "Her mother has very long hair." },
      { word: "short", pronunciation: "/ʃɔːt/", meaning: "not long; small in length or height", example: "Mai is short but very fast." },
      { word: "carefully", pronunciation: "/ˈkeəfəli/", meaning: "with great attention so you do not make mistakes", example: "She writes her name very carefully." },
      { word: "happily", pronunciation: "/ˈhæpɪli/", meaning: "in a happy and joyful way; with pleasure", example: "The children play happily in the park." },
      { word: "loudly", pronunciation: "/ˈlaʊdli/", meaning: "in a loud way; making a lot of noise", example: "He always talks loudly on the phone." },
      { word: "quickly", pronunciation: "/ˈkwɪkli/", meaning: "at great speed; fast; without delay", example: "She runs very quickly in races." },
      { word: "slowly", pronunciation: "/ˈsləʊli/", meaning: "at a slow speed; not quickly; taking a long time", example: "The turtle moves slowly on the sand." },
      { word: "well", pronunciation: "/wel/", meaning: "in a good or correct way; with skill", example: "Penguins can swim very well." },
      { word: "parents", pronunciation: "/ˈpeərənts/", meaning: "a person's father and mother together", example: "Emperor penguins are amazing parents." },
      { word: "penguin", pronunciation: "/ˈpeŋɡwɪn/", meaning: "a black and white bird that lives in cold places and cannot fly but can swim", example: "Penguins live in Antarctica." },
      { word: "keep warm", pronunciation: "/kiːp wɔːm/", meaning: "to make something or someone stay at a warm temperature", example: "The father keeps the egg warm on his feet." },
      { word: "leave", pronunciation: "/liːv/", meaning: "to go away from a place or person", example: "The mother leaves to find food in the sea." },
      { word: "come out of", pronunciation: "/kʌm aʊt ɒv/", meaning: "to move out from inside something", example: "The baby comes out of the egg after two months." },
      { word: "twin", pronunciation: "/twɪn/", meaning: "one of two children born to the same mother at the same time", example: "Carla and Lorena are twins." },
      { word: "friendly", pronunciation: "/ˈfrendli/", meaning: "kind and pleasant; easy to talk to and make friends with", example: "She is very friendly and always smiles." },
      { word: "noisy", pronunciation: "/ˈnɔɪzi/", meaning: "making a lot of loud and unpleasant sound", example: "My baby brother is very noisy." },
      { word: "brave", pronunciation: "/breɪv/", meaning: "not afraid of danger; willing to do difficult or scary things", example: "The brave boy jumped into the cold water." },
      { word: "shy", pronunciation: "/ʃaɪ/", meaning: "nervous and uncomfortable around other people; not confident", example: "She is shy and doesn't talk to strangers." },
      { word: "polite", pronunciation: "/pəˈlaɪt/", meaning: "behaving in a respectful and well-mannered way", example: "Always be polite and say thank you." },
      { word: "uncle", pronunciation: "/ˈʌŋkl/", meaning: "the brother of your mother or father", example: "My uncle takes me to the park every Sunday." },
      { word: "cousin", pronunciation: "/ˈkʌzn/", meaning: "the child of your aunt or uncle", example: "My cousin and I love playing together." },
    ],
    grammar: [
      { id: "g1", type: "multiple_choice", question: "Both Lorena and Carla ___ clever.", options: ["is", "are", "be", "am"], answer: "are", explanation: "Dùng 'are' vì Both A and B → số nhiều" },
      { id: "g2", type: "multiple_choice", question: "Lorena is quiet, ___ Carla is loud.", options: ["and", "but", "or", "so"], answer: "but", explanation: "Dùng 'but' để chỉ sự tương phản" },
      { id: "g3", type: "fill_blank", question: "They are good swimmers. Penguins can swim very ___.", answer: "well", hint: "good → ___" },
      { id: "g4", type: "fill_blank", question: "Penguins are careful parents. They take care of their eggs ___.", answer: "carefully", hint: "careful → ___" },
      { id: "g5", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["Both", "turtles", "and", "ants", "are", "slow", "."], answer: "Both turtles and ants are slow ." },
      { id: "g6", type: "multiple_choice", question: "This is my ___ dog. (grandma)", options: ["grandmas", "grandma's", "grandmas'", "grandma"], answer: "grandma's", explanation: "Dùng 's để chỉ sở hữu của một người" },
      { id: "g7", type: "multiple_choice", question: "He is a loud person. He always talks ___.", options: ["loud", "loudly", "louder", "loudness"], answer: "loudly", explanation: "Dùng trạng từ (adverb) sau động từ" },
      { id: "g8", type: "fill_blank", question: "My sister is a slow runner. She runs ___.", answer: "slowly", hint: "slow → ___" },
      { id: "g9", type: "multiple_choice", question: "She smiles at everyone and makes friends easily. She is very ___.", options: ["shy", "noisy", "friendly", "brave"], answer: "friendly", explanation: "friendly = thân thiện, dễ gần" },
      { id: "g10", type: "multiple_choice", question: "Both cats and dogs ___ popular pets.", options: ["is", "are", "be", "am"], answer: "are", explanation: "Both A and B + are (số nhiều)" },
      { id: "g11", type: "fill_blank", question: "She is a careful driver. She drives ___.", answer: "carefully", hint: "careful → ___" },
      { id: "g12", type: "fill_blank", question: "He is a happy boy. He always smiles ___.", answer: "happily", hint: "happy → ___" },
      { id: "g13", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["Both", "Mike", "and", "Tom", "have", "short", "dark", "hair", "."], answer: "Both Mike and Tom have short dark hair ." },
      { id: "g14", type: "multiple_choice", question: "___ Lorena and Carla are twins.", options: ["Both", "All", "Each", "Every"], answer: "Both", explanation: "Both = cả hai" },
      { id: "g15", type: "multiple_choice", question: "My father is very loud. He speaks ___.", options: ["loud", "loudly", "quiet", "slowly"], answer: "loudly", explanation: "Trạng từ mô tả cách nói chuyện" },
      { id: "g16", type: "fill_blank", question: "She writes very carefully. She is a ___ writer.", answer: "careful", hint: "carefully → tính từ gốc" },
    ],
    dictation: [
      "Both Carla and Lorena are tall with curly hair.",
      "They are clever and crazy about building new things.",
      "Penguins are amazing birds and great parents.",
      "The father keeps the egg warm on his feet.",
      "After two months, the baby comes out of the egg.",
      "My best friend has short, dark hair and brown eyes.",
      "She has long, straight, fair hair and blue eyes.",
      "My uncle is funny and very friendly.",
      "Both twins love building and making new things.",
      "My cousin has short, dark, curly hair.",
      "He is brave but sometimes very noisy.",
      "She writes her name carefully and neatly.",
      "My best friend is funny, loud and clever.",
      "Both the cat and the dog are quiet and well-behaved.",
    ],
    writing: {
      title: "My Best Friend",
      template: `Hello!
My name's [your name].
I'm [age] years old. I'm from [country].
My best friend is [name].
His/Her hair is [hair description].
His/Her eyes are [eye colour].
He's/She's [personality].
Both [friend] and I are [common trait].`,
      prompts: [
        "Viết 2 câu dùng Both...and về 2 người trong gia đình em",
        "Mô tả bạn thân dùng các tính từ: clever, funny, quiet, loud",
        "Viết email cho bạn giới thiệu người bạn thân nhất của em",
        "Dùng adverbs: carefully, quickly, loudly, happily để mô tả cách em làm việc",
      ]
    },
    speaking: [
      "Tell me about 2 people in your family. Use 'Both...and' and 'but'! (30 seconds)",
      "Describe your best friend's hair and personality! (30 seconds)",
      "Who can run quickly in your class? Tell me about 3 classmates! (30 seconds)",
      "Show and tell: Describe your family poster! (60 seconds)",
    ],
    reading: {
      title: "Twin Sisters",
      passage: `Carla and Lorena are twins. They are nine years old. They are the same in many ways, but they are different in many ways, too.

Both Carla and Lorena are tall with curly hair. They are both clever and crazy about building and making new things. These twins are best friends.

But Carla is loud. She talks a lot and has got lots of friends. She is funny, too. Lorena is quiet. She has got two good friends, but she is often with her sister, Carla.

Emperor penguins are also great parents. The mother penguin has one egg every winter. She gives the egg to the father. The father keeps the egg warm on his feet. He stays with the egg and does not eat. After two months, the baby comes out of the egg. Soon, the mother comes back with food. These penguins are careful parents. They take care of their babies very well.`,
      questions: [
        { type: "multiple_choice", question: "How old are Carla and Lorena?", options: ["Seven", "Eight", "Nine", "Ten"], answer: "Nine" },
        { type: "true_false", question: "Both twins have straight hair.", answer: false },
        { type: "multiple_choice", question: "What are both twins crazy about?", options: ["Swimming", "Building and making things", "Reading books", "Playing music"], answer: "Building and making things" },
        { type: "true_false", question: "Carla is quiet and has only two friends.", answer: false },
        { type: "true_false", question: "The father penguin keeps the egg warm on his feet.", answer: true },
        { type: "multiple_choice", question: "How long does the father penguin stay with the egg?", options: ["One month", "Two months", "Three months", "Four months"], answer: "Two months" },
        { type: "short_answer", question: "What word describes Carla's personality? (one word)", answer: "loud" },
      ]
    },
    listenFill: [
      { audio: "Both Carla and Lorena are clever.", display: "Both Carla and Lorena are ___.", answers: ["clever"] },
      { audio: "Carla is loud, but Lorena is quiet.", display: "Carla is loud, but Lorena is ___.", answers: ["quiet"] },
      { audio: "Penguins can swim very well.", display: "Penguins can swim very ___.", answers: ["well"] },
      { audio: "The father keeps the egg warm on his feet.", display: "The father keeps the egg ___ on his feet.", answers: ["warm"] },
      { audio: "After two months, the baby comes out of the egg.", display: "After two ___, the baby comes out of the egg.", answers: ["months"] },
      { audio: "Penguins are careful parents. They take care of their eggs carefully.", display: "Penguins are careful parents. They take care of their eggs ___.", answers: ["carefully"] },
      { audio: "My best friend has long, dark hair and brown eyes.", display: "My best friend has long, ___ hair and brown eyes.", answers: ["dark"] },
      { audio: "Her mother's hair is brown.", display: "Her ___'s hair is brown.", answers: ["mother"] },
      { audio: "She has curly hair and blue eyes.", display: "She has ___ hair and blue eyes.", answers: ["curly"] },
      { audio: "He has long, straight, dark hair.", display: "He has long, ___, dark hair.", answers: ["straight"] },
      { audio: "My uncle is funny and friendly.", display: "My uncle is funny and ___.", answers: ["friendly"] },
      { audio: "Both twins love building new things.", display: "Both twins love ___ new things.", answers: ["building"] },
      { audio: "He always talks loudly on the phone.", display: "He always talks ___ on the phone.", answers: ["loudly"] },
      { audio: "The twins are crazy about making things.", display: "The twins are crazy ___ making things.", answers: ["about"] },
      { audio: "My best friend is very polite.", display: "My best friend is very ___.", answers: ["polite"] },
      { audio: "He runs quickly and jumps happily.", display: "He runs ___ and jumps happily.", answers: ["quickly"] },
      { audio: "My cousin is noisy but funny.", display: "My cousin is noisy but ___.", answers: ["funny"] },
      { audio: "Both brothers have fair hair.", display: "Both brothers have ___ hair.", answers: ["fair"] },
      { audio: "The mother penguin leaves to find food.", display: "The mother penguin ___ to find food.", answers: ["leaves"] },
      { audio: "She is shy but very clever.", display: "She is shy but very ___.", answers: ["clever"] },
    ],
    pronunciation: {
      focus: "Word stress: 2-syllable words",
      words: ["MOther", "FAther", "BROther", "SISter", "BAby", "HAppy", "CLEver", "FUnny", "FRIENDly", "NOIsy"],
      chant: "Mother, father, sister, brother,\nBabies too, like no other.\nHappy, clever, all are friends,\nNoisy family, fun never ends!"
    },
    review: {
      errorCorrection: [
        { wrong: "Mai and Nam is funny.", display: "Mai and Nam ___ funny.", answer: "are", hint: "Hai người (Mai and Nam) → are" },
        { wrong: "Both Lucy or Amy are clever.", display: "Both Lucy ___ Amy are clever.", answer: "and", hint: "Both...and (không dùng Both...or)" },
        { wrong: "He is a badly singer.", display: "He is a ___ singer.", answer: "bad", hint: "Trước danh từ dùng tính từ, không phải trạng từ" },
        { wrong: "They are quickly runners.", display: "They are ___ runners.", answer: "quick", hint: "Trước danh từ 'runners' dùng tính từ" },
        { wrong: "Diana dances good.", display: "Diana dances ___.", answer: "well", hint: "Sau động từ dùng trạng từ (well, not good)" },
        { wrong: "The children play happy together.", display: "The children play ___ together.", answer: "happily", hint: "Trạng từ bổ nghĩa cho động từ 'play'" },
        { wrong: "Mice run quiet around the house.", display: "Mice run ___ around the house.", answer: "quietly", hint: "Adverb modifies verb 'run'" },
        { wrong: "Simon are a careful student.", display: "Simon ___ a careful student.", answer: "is", hint: "Simon (một người, số ít) → is" },
      ],
      oddOneOut: [
        { words: ["Mother", "Father", "Happy", "Sister"], answer: "Happy", reason: "Happy là tính từ, còn lại đều là thành viên gia đình" },
        { words: ["Friendly", "Clever", "Happily", "Noisy"], answer: "Happily", reason: "Happily là trạng từ (-ly), còn lại đều là tính từ" },
        { words: ["Carefully", "Loudly", "Slowly", "Happy"], answer: "Happy", reason: "Happy là tính từ, còn lại đều là trạng từ kết thúc -ly" },
        { words: ["Brother", "Inside", "Outside", "Above"], answer: "Brother", reason: "Brother là thành viên gia đình, còn lại là giới từ chỉ vị trí" },
        { words: ["Curly", "Straight", "Run", "Fair"], answer: "Run", reason: "Run là động từ, còn lại đều là tính từ miêu tả tóc" },
        { words: ["Loud", "Quiet", "Clever", "Quickly"], answer: "Quickly", reason: "Quickly là trạng từ (-ly), còn lại đều là tính từ" },
      ],
    },
  },
  {
    id: 2,
    title: "My Favourite Things",
    color: "purple",
    icon: "🎮",
    vocabulary: [
      { word: "puzzle", pronunciation: "/ˈpʌzl/", meaning: "a game where you put many pieces together to make a picture", example: "The puzzle has 500 pieces." },
      { word: "computer", pronunciation: "/kəmˈpjuːtə(r)/", meaning: "an electronic machine that can store and process information", example: "Computers are exciting and fun to use." },
      { word: "typewriter", pronunciation: "/ˈtaɪpraɪtə(r)/", meaning: "an old machine used for typing letters by pressing keys", example: "Dad found an old typewriter in the box." },
      { word: "piece", pronunciation: "/piːs/", meaning: "one part of something that has been divided or broken", example: "The puzzle has five hundred pieces." },
      { word: "photo", pronunciation: "/ˈfəʊtəʊ/", meaning: "a picture taken by a camera", example: "She took a photo of the whole family." },
      { word: "globe", pronunciation: "/ɡləʊb/", meaning: "a round object shaped like the Earth, showing all the countries", example: "A talking globe can teach you about countries." },
      { word: "map", pronunciation: "/mæp/", meaning: "a drawing of a country or city that shows roads, rivers and towns", example: "Can you find Vietnam on the map?" },
      { word: "moving", pronunciation: "/ˈmuːvɪŋ/", meaning: "going from one place to another; not staying still", example: "The toy spider has eight moving legs." },
      { word: "scare", pronunciation: "/skeə(r)/", meaning: "to make someone feel frightened or afraid suddenly", example: "Do you like to scare your friends with toys?" },
      { word: "spider", pronunciation: "/ˈspaɪdə(r)/", meaning: "a small creature with eight legs that makes webs to catch insects", example: "A toy spider with moving legs is very funny." },
      { word: "puppet", pronunciation: "/ˈpʌpɪt/", meaning: "a doll that you move with your hands or strings to act out stories", example: "He plays with puppets with his brother." },
      { word: "violin", pronunciation: "/ˌvaɪəˈlɪn/", meaning: "a musical instrument with four strings that you play with a bow", example: "She is quite good at the violin." },
      { word: "above", pronunciation: "/əˈbʌv/", meaning: "in a higher position than something else; over", example: "A green ball is above the cupboard." },
      { word: "below", pronunciation: "/bɪˈləʊ/", meaning: "in a lower position than something else; under", example: "Two blue balls are below the chair." },
      { word: "inside", pronunciation: "/ɪnˈsaɪd/", meaning: "in the inner part of something; not outside", example: "A yellow ball is inside the box." },
      { word: "outside", pronunciation: "/ˌaʊtˈsaɪd/", meaning: "not inside; in the area surrounding something", example: "The children play outside in the garden." },
      { word: "exciting", pronunciation: "/ɪkˈsaɪtɪŋ/", meaning: "making you feel happy and full of energy; thrilling", example: "Computers are exciting and fun." },
      { word: "interesting", pronunciation: "/ˈɪntrəstɪŋ/", meaning: "holding your attention; making you want to know more", example: "This book is interesting but expensive." },
      { word: "expensive", pronunciation: "/ɪkˈspensɪv/", meaning: "costing a lot of money; not cheap", example: "That new computer game is very expensive." },
      { word: "favourite", pronunciation: "/ˈfeɪvərɪt/", meaning: "the thing or person you like best above all others", example: "What was your favourite toy when you were five?" },
      { word: "collect", pronunciation: "/kəˈlekt/", meaning: "to bring together and keep things as a hobby", example: "She collects postcards from different countries." },
      { word: "strange", pronunciation: "/streɪndʒ/", meaning: "unusual or surprising in a way that is difficult to understand", example: "The old typewriter looked very strange to Sonja." },
      { word: "skateboard", pronunciation: "/ˈskeɪtbɔːd/", meaning: "a flat board with four wheels that you stand on and ride", example: "He rides his skateboard to school every day." },
      { word: "kite", pronunciation: "/kaɪt/", meaning: "a toy made of light material that flies in the wind on a string", example: "My favourite thing when I was seven was my kite." },
      { word: "drawer", pronunciation: "/drɔː(r)/", meaning: "a part of a piece of furniture that slides in and out, used to store things", example: "Keep your toys in the drawer." },
      { word: "between", pronunciation: "/bɪˈtwiːn/", meaning: "in the space that separates two things or people", example: "The ball is between the two boxes." },
      { word: "behind", pronunciation: "/bɪˈhaɪnd/", meaning: "at the back of something or someone", example: "The cat is hiding behind the sofa." },
      { word: "next to", pronunciation: "/nekst tuː/", meaning: "very close to something, with nothing in between", example: "My book is next to the lamp." },
      { word: "in front of", pronunciation: "/ɪn frʌnt ɒv/", meaning: "facing something; directly before something", example: "The ball is in front of the box." },
      { word: "in the middle of", pronunciation: "/ɪn ðə ˈmɪdl ɒv/", meaning: "at the centre of something; not at the sides or edges", example: "A big red ball is in the middle of the room." },
      { word: "shelf", pronunciation: "/ʃelf/", meaning: "a flat board fixed to a wall or inside a cupboard to put things on", example: "Put your books on the shelf." },
      { word: "precious", pronunciation: "/ˈpreʃəs/", meaning: "very valuable and important; worth a lot", example: "That old photo is very precious to me." },
    ],
    grammar: [
      {
        id: "g1",
        type: "multiple_choice",
        question: "When you were seven years old, what ___ your favourite thing?",
        options: ["is", "was", "are", "were"],
        answer: "was",
        explanation: "Dùng 'was' với chủ ngữ số ít (your favourite thing) ở quá khứ"
      },
      {
        id: "g2",
        type: "multiple_choice",
        question: "A green ball is ___ the cupboard.",
        options: ["below", "above", "inside", "outside"],
        answer: "above",
        explanation: "Above = ở phía trên"
      },
      {
        id: "g3",
        type: "fill_blank",
        question: "Computers are exciting ___ fun.",
        answer: "and",
        hint: "Dùng liên từ để thêm ý"
      },
      {
        id: "g4",
        type: "fill_blank",
        question: "This book is interesting, ___ it's expensive.",
        answer: "but",
        hint: "Dùng liên từ để chỉ sự tương phản"
      },
      {
        id: "g5",
        type: "multiple_choice",
        question: "Where ___ the pen?",
        options: ["is", "was", "are", "were"],
        answer: "was",
        explanation: "Câu hỏi quá khứ với chủ ngữ số ít"
      },
      { id: "g7", type: "fill_blank", question: "She is ___ at drawing pictures.", answer: "good", hint: "be ___ at = giỏi về" },
      { id: "g8", type: "multiple_choice", question: "The ball is ___ the two boxes.", options: ["between", "below", "above", "outside"], answer: "between", explanation: "between = ở giữa hai vật" },
      { id: "g9", type: "fill_blank", question: "My books ___ (be) inside the drawer last year.", answer: "were", hint: "be quá khứ số nhiều" },
      { id: "g10", type: "multiple_choice", question: "When you were five, ___ your favourite toy?", options: ["what is", "what was", "what were", "what are"], answer: "what was", explanation: "Câu hỏi quá khứ đơn về chủ ngữ số ít" },
      { id: "g11", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["A", "red", "ball", "is", "in", "front", "of", "the", "box", "."], answer: "A red ball is in front of the box ." },
      { id: "g12", type: "fill_blank", question: "The toy spider has eight ___ legs.", answer: "moving", hint: "Tính từ mô tả chân nhện" },
      { id: "g13", type: "multiple_choice", question: "This book is interesting, ___ it is expensive.", options: ["and", "or", "but", "so"], answer: "but", explanation: "but = tuy nhiên (tương phản)" },
      { id: "g14", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["My", "kite", "was", "behind", "the", "sofa", "."], answer: "My kite was behind the sofa ." },
      {
        id: "g6",
        type: "reorder",
        question: "Sắp xếp thành câu đúng:",
        words: ["Two", "blue", "balls", "are", "below", "the", "chair", "."],
        answer: "Two blue balls are below the chair ."
      },
    ],
    dictation: [
      "Computers are exciting and fun.",
      "A green ball is above the cupboard.",
      "Two blue balls are below the chair.",
      "When you were seven years old, what was your favourite thing?",
      "This book is interesting, but it is expensive.",
      "A yellow ball is inside the box.",
      "My favourite toy when I was six was a kite.",
      "The puzzle has five hundred pieces.",
      "She liked puppets and comic books when she was young.",
      "Two red balls are in front of the cupboard.",
      "The toy spider has eight moving legs.",
      "My old books were inside the drawer.",
      "Was the kite behind the desk?",
      "A blue ball is between the two chairs.",
    ],
    writing: {
      title: "My Favourite Thing",
      template: `My favourite thing is my [object].
It is [colour] and [size/description].
I use it [when/where].
It is [adjective] and [adjective].
I love it because [reason].`,
      prompts: [
        "Mô tả đồ vật yêu thích dùng above, below, inside, outside",
        "Viết về đồ vật yêu thích hồi 6 tuổi dùng was/were",
        "Kết hợp câu dùng and và but",
        "Viết email cho bạn giới thiệu đồ vật yêu thích của bạn thân em",
      ]
    },
    speaking: [
      "What was your favourite thing when you were 5 years old? (30 seconds)",
      "Describe where things are in your room using above, below, inside, outside! (30 seconds)",
      "Tell me about your best friend's favourite thing! (30 seconds)",
    ],
    reading: {
      title: "Dad's Box of Favourite Things",
      passage: `One day, Dad found an old box. Inside the box were his favourite things from when he was a little boy.

"Look, Sonja!" said Dad. "A puzzle! It has got 500 pieces. Do you want to do it with me?"

"Not now, Dad," said Sonja. "What other things have you got?"

"Well, some old books. This was my favourite storybook when I was ten years old. It was about a boy and his puppy."

"Sounds interesting! Anything else?"

"Some photos and… a typewriter!"

"What is that? It is so strange! Can I touch it?"

"Of course! You can type with it. You just put the paper in and touch the letters."

Sonja thought the typewriter was amazing. Computers are exciting and fun, but a typewriter is something special. It is old, but it is interesting. Some old things are better than new ones!`,
      questions: [
        { type: "multiple_choice", question: "What did Dad find?", options: ["A new toy", "An old box", "A photo album", "A storybook"], answer: "An old box" },
        { type: "true_false", question: "The puzzle has 500 pieces.", answer: true },
        { type: "multiple_choice", question: "What was Dad's favourite storybook about?", options: ["A girl and her cat", "A boy and his puppy", "A family holiday", "A magic castle"], answer: "A boy and his puppy" },
        { type: "true_false", question: "Sonja found the typewriter boring.", answer: false },
        { type: "multiple_choice", question: "Where did Sonja put the paper to use the typewriter?", options: ["Under the typewriter", "In the typewriter", "Behind the typewriter", "On top of the typewriter"], answer: "In the typewriter" },
        { type: "short_answer", question: "What adjective does the author use to describe the typewriter? (one word)", answer: "strange" },
      ]
    },
    listenFill: [
      { audio: "Computers are exciting and fun.", display: "Computers are ___ and fun.", answers: ["exciting"] },
      { audio: "This book is interesting, but it is expensive.", display: "This book is interesting, but it is ___.", answers: ["expensive"] },
      { audio: "A green ball is above the cupboard.", display: "A green ball is ___ the cupboard.", answers: ["above"] },
      { audio: "Two blue balls are below the chair.", display: "Two blue balls are ___ the chair.", answers: ["below"] },
      { audio: "When you were seven years old, what was your favourite thing?", display: "When you were seven years old, what ___ your favourite thing?", answers: ["was"] },
      { audio: "The toy spider has got eight moving legs.", display: "The toy spider has got eight ___ legs.", answers: ["moving"] },
      { audio: "My favourite thing when I was nine was my kite.", display: "My favourite thing when I was nine ___ my kite.", answers: ["was"] },
      { audio: "The ball is inside the box.", display: "The ball is ___ the box.", answers: ["inside"] },
      { audio: "A yellow ball is inside the box.", display: "A yellow ball is ___ the box.", answers: ["inside"] },
      { audio: "The ball is between the two chairs.", display: "The ball is ___ the two chairs.", answers: ["between"] },
      { audio: "She can play the violin very well.", display: "She can play the ___ very well.", answers: ["violin"] },
      { audio: "The toy spider is outside the box.", display: "The toy spider is ___ the box.", answers: ["outside"] },
      { audio: "Was the kite behind the sofa?", display: "Was the kite ___ the sofa?", answers: ["behind"] },
      { audio: "The book is interesting but it is expensive.", display: "The book is interesting ___ it is expensive.", answers: ["but"] },
      { audio: "His favourite thing was his skateboard.", display: "His favourite thing ___ his skateboard.", answers: ["was"] },
      { audio: "The globe is next to the lamp.", display: "The globe is ___ to the lamp.", answers: ["next"] },
      { audio: "When I was seven, I collected photos.", display: "When I was seven, I ___ photos.", answers: ["collected"] },
      { audio: "A green ball is above the shelf.", display: "A green ball is ___ the shelf.", answers: ["above"] },
      { audio: "The puppet is in the middle of the room.", display: "The puppet is in the ___ of the room.", answers: ["middle"] },
      { audio: "My father found an old box with his favourite things.", display: "My father found an old ___ with his favourite things.", answers: ["box"] },
    ],
    pronunciation: {
      focus: "Word stress: 3-syllable words",
      words: ["ex-PEN-sive", "com-PU-ter", "fan-TAS-tic", "ba-NA-na"],
      chant: ""
    },
    review: {
      errorCorrection: [
        { wrong: "It were his favourite kite.", display: "It ___ his favourite kite.", answer: "was", hint: "It (số ít) → was (quá khứ)" },
        { wrong: "A green ball are above the cupboard.", display: "A green ball ___ above the cupboard.", answer: "is", hint: "A green ball (số ít) → is" },
        { wrong: "Both my mother and grandma is friendly.", display: "Both my mother and grandma ___ friendly.", answer: "are", hint: "Both A and B → are (số nhiều)" },
        { wrong: "Lisa are quiet and clever.", display: "Lisa ___ quiet and clever.", answer: "is", hint: "Lisa (một người, số ít) → is" },
        { wrong: "My watch are green and black.", display: "My watch ___ green and black.", answer: "is", hint: "My watch (số ít) → is" },
        { wrong: "The comic book are exciting and fun.", display: "The comic book ___ exciting and fun.", answer: "is", hint: "The comic book (số ít) → is" },
        { wrong: "When you were five, what were your favourite thing?", display: "When you were five, what ___ your favourite thing?", answer: "was", hint: "Favourite thing (số ít) → was" },
        { wrong: "Computers is exciting and fun.", display: "Computers ___ exciting and fun.", answer: "are", hint: "Computers (số nhiều) → are" },
      ],
      oddOneOut: [
        { words: ["Banana", "Expensive", "Fantastic", "Beautiful"], answer: "Banana", reason: "Banana là danh từ (trái cây), còn lại đều là tính từ" },
        { words: ["Globe", "Beautiful", "Computer", "Map"], answer: "Beautiful", reason: "Beautiful là tính từ, còn lại đều là đồ vật (danh từ)" },
        { words: ["Puzzle", "Photo", "Map", "Scary"], answer: "Scary", reason: "Scary là tính từ, còn lại đều là đồ vật (danh từ)" },
        { words: ["Above", "Below", "Inside", "Violin"], answer: "Violin", reason: "Violin là nhạc cụ (danh từ), còn lại đều là giới từ chỉ vị trí" },
        { words: ["Was", "Were", "Is", "Computer"], answer: "Computer", reason: "Computer là danh từ, còn lại đều là dạng của động từ 'to be'" },
        { words: ["Puzzle", "Globe", "Map", "Outside"], answer: "Outside", reason: "Outside là giới từ vị trí, còn lại đều là đồ vật (danh từ)" },
      ],
    },
  },
  {
    id: 3,
    title: "School Life",
    color: "green",
    icon: "📚",
    vocabulary: [
      { word: "exercise", pronunciation: "/ˈeksəsaɪz/", meaning: "physical activity that keeps your body strong and healthy", example: "We do exercise every morning at school." },
      { word: "practise", pronunciation: "/ˈpræktɪs/", meaning: "to do something repeatedly to get better at it", example: "He practises the piano every evening." },
      { word: "problem", pronunciation: "/ˈprɒbləm/", meaning: "a situation that is difficult and needs to be solved", example: "Can you help me solve this maths problem?" },
      { word: "solution", pronunciation: "/səˈluːʃn/", meaning: "the answer to a problem or a way to fix a difficulty", example: "We need to find a solution quickly." },
      { word: "uniform", pronunciation: "/ˈjuːnɪfɔːm/", meaning: "a special set of clothes that everyone in the same group wears", example: "We wear a uniform to school every day." },
      { word: "always", pronunciation: "/ˈɔːlweɪz/", meaning: "at all times; every time without exception", example: "She always does her homework on time." },
      { word: "usually", pronunciation: "/ˈjuːʒuəli/", meaning: "in the way that normally happens; most of the time", example: "I usually walk to school in the morning." },
      { word: "often", pronunciation: "/ˈɒfn/", meaning: "many times; happening frequently", example: "He often plays football after school." },
      { word: "sometimes", pronunciation: "/ˈsʌmtaɪmz/", meaning: "on some occasions; not always, but more than rarely", example: "I sometimes ride my bike to school." },
      { word: "never", pronunciation: "/ˈnevə(r)/", meaning: "at no time; not ever", example: "I never forget to bring my textbook." },
      { word: "fitness centre", pronunciation: "/ˈfɪtnəs ˈsentə(r)/", meaning: "a building with equipment for doing physical exercise", example: "We go to the fitness centre on Tuesdays." },
      { word: "subject", pronunciation: "/ˈsʌbdʒɪkt/", meaning: "a topic that is studied at school, such as maths or science", example: "Maths is my favourite subject." },
      { word: "science", pronunciation: "/ˈsaɪəns/", meaning: "the study of the natural world through observation and experiments", example: "We do fun experiments in science class." },
      { word: "geography", pronunciation: "/dʒiˈɒɡrəfi/", meaning: "the study of countries, mountains, rivers and natural features of the Earth", example: "I love geography because I learn about countries." },
      { word: "history", pronunciation: "/ˈhɪstri/", meaning: "the study of things that happened in the past", example: "We are learning about ancient history." },
      { word: "art", pronunciation: "/ɑːt/", meaning: "the activity of creating paintings, drawings or sculptures", example: "I love art because I enjoy drawing." },
      { word: "library", pronunciation: "/ˈlaɪbrəri/", meaning: "a room or building with a collection of books to read or borrow", example: "I do my homework in the school library." },
      { word: "playground", pronunciation: "/ˈpleɪɡraʊnd/", meaning: "an outdoor area where children can play, usually at school", example: "We run and play on the playground at break time." },
      { word: "canteen", pronunciation: "/kænˈtiːn/", meaning: "a place in a school where students can buy and eat food", example: "We eat lunch in the school canteen." },
      { word: "break time", pronunciation: "/breɪk taɪm/", meaning: "a short period during school when students stop studying and relax", example: "I play with my friends at break time." },
      { word: "homework", pronunciation: "/ˈhəʊmwɜːk/", meaning: "schoolwork that students do at home after school hours", example: "I always do my homework before dinner." },
      { word: "timetable", pronunciation: "/ˈtaɪmteɪbl/", meaning: "a list showing when different subjects or activities happen", example: "Check your timetable for tomorrow's classes." },
      { word: "prize", pronunciation: "/praɪz/", meaning: "something valuable given to the winner of a competition or for doing well", example: "She won a prize for the best science project." },
      { word: "wake up", pronunciation: "/weɪk ʌp/", meaning: "to stop sleeping and become conscious", example: "I wake up at six o'clock every morning." },
      { word: "take care of", pronunciation: "/teɪk keər ɒv/", meaning: "to look after someone or something; to be responsible for", example: "We take care of the plants in our classroom." },
      { word: "arts and crafts", pronunciation: "/ɑːts ənd krɑːfts/", meaning: "creative activities such as making things with your hands", example: "I love doing arts and crafts on weekends." },
      { word: "walk to school", pronunciation: "/wɔːk tə skuːl/", meaning: "to travel to school on foot", example: "I usually walk to school with my brother." },
      { word: "wear a uniform", pronunciation: "/weər ə ˈjuːnɪfɔːm/", meaning: "to put on and use the official clothes of your school", example: "All students must wear a uniform." },
      { word: "go to school", pronunciation: "/ɡəʊ tə skuːl/", meaning: "to travel to and attend school", example: "I go to school five days a week." },
      { word: "science club", pronunciation: "/ˈsaɪəns klʌb/", meaning: "a group at school that meets to do extra science activities", example: "He goes to science club after school on Fridays." },
      { word: "play an instrument", pronunciation: "/pleɪ ən ˈɪnstrəmənt/", meaning: "to make music using a musical instrument", example: "Can you play an instrument? I play the piano." },
      { word: "classmate", pronunciation: "/ˈklɑːsmeɪt/", meaning: "a person who is in the same class as you at school", example: "My classmates are very kind and helpful." },
    ],
    grammar: [
      {
        id: "g1",
        type: "multiple_choice",
        question: "I ___ walk to school, but I ___ ride my bike.",
        options: ["often / sometimes", "never / always", "always / often", "sometimes / never"],
        answer: "often / sometimes",
        explanation: "Trạng từ tần suất: often (thường) / sometimes (đôi khi)"
      },
      {
        id: "g2",
        type: "multiple_choice",
        question: "Adverbs of frequency go ___ the main verb.",
        options: ["before", "after", "at the end of", "at the beginning of"],
        answer: "before",
        explanation: "Trạng từ tần suất đứng TRƯỚC động từ chính"
      },
      {
        id: "g3",
        type: "fill_blank",
        question: "He studies maths every weekday. He ___ studies maths on Saturdays.",
        answer: "never",
        hint: "Không bao giờ học cuối tuần"
      },
      {
        id: "g4",
        type: "reorder",
        question: "Sắp xếp thành câu đúng:",
        words: ["She", "always", "has", "breakfast", "with", "her", "mum", "."],
        answer: "She always has breakfast with her mum ."
      },
      { id: "g5", type: "multiple_choice", question: "The verb 'goes' has the /___/ sound at the end.", options: ["/z/", "/s/", "/iz/", "/ez/"], answer: "/z/", explanation: "goes → /z/ vì âm trước đó là nguyên âm" },
      { id: "g6", type: "fill_blank", question: "She ___ brushes her teeth before bed.", answer: "always", hint: "100% thời gian" },
      { id: "g7", type: "multiple_choice", question: "Which sentence is correct?", options: ["She always is late.", "She is always late.", "Always she is late.", "She was always late."], answer: "She is always late.", explanation: "Trạng từ tần suất đứng sau be" },
      { id: "g8", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["I", "sometimes", "watch", "movies", "on", "Fridays", "."], answer: "I sometimes watch movies on Fridays ." },
      { id: "g9", type: "fill_blank", question: "He ___ misses breakfast. He eats every day.", answer: "never", hint: "0% thời gian" },
      { id: "g10", type: "multiple_choice", question: "Adverbs of frequency go ___ the main verb.", options: ["before", "after", "at the end", "at the start"], answer: "before", explanation: "Trạng từ tần suất đứng TRƯỚC động từ chính" },
      { id: "g11", type: "fill_blank", question: "She ___ (come) to school early every day.", answer: "comes", hint: "He/She/It + verb-s" },
      { id: "g12", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["We", "never", "forget", "to", "do", "our", "homework", "."], answer: "We never forget to do our homework ." },
      { id: "g13", type: "multiple_choice", question: "The verb 'watches' ends with the /__/ sound.", options: ["/ɪz/", "/z/", "/s/", "/əz/"], answer: "/ɪz/", explanation: "watch → watches /wɒtʃɪz/" },
      { id: "g14", type: "fill_blank", question: "I ___ ride my bike when it rains. I walk instead.", answer: "never", hint: "Không bao giờ đạp xe khi mưa" },
    ],
    dictation: [
      "I often walk to school, but I sometimes ride my bike.",
      "She always has breakfast with her mum and dad.",
      "He usually does his homework after school.",
      "We never forget to wear our uniform.",
      "She always brushes her teeth before bed.",
      "My teacher often gives interesting science lessons.",
      "I sometimes ride my bike to school.",
      "We never eat in the classroom.",
      "He usually studies maths at the library.",
      "I often help my mum with housework after school.",
      "My classmates always wear their uniforms.",
      "He never forgets to bring his lunchbox.",
      "I sometimes stay at school for science club.",
      "Does she always walk to school?",
    ],
    writing: {
      title: "My School Day",
      template: `I [always/usually/often/sometimes/never] wake up at [time].
I [always/usually] have breakfast with [family member].
I [usually/often] [go to school by...].
After school, I [sometimes/often] [activity].
In the evening, I [usually] [activity].
I [never/sometimes] [activity] on weekends.`,
      prompts: [
        "Dùng always/usually/often/sometimes/never mô tả một ngày đi học của em",
        "Viết về lịch học môn yêu thích: every day / on Mondays / in the morning",
        "So sánh thói quen của em và một người bạn dùng but",
      ]
    },
    speaking: [
      "Describe your school day using always, usually, often, sometimes, never! (45 seconds)",
      "What subjects do you study? Which is your favourite and why? (30 seconds)",
      "Tell me about your school routine on a typical Monday! (45 seconds)",
    ],
    reading: {
      title: "Minh's School Day",
      passage: `Minh is ten years old. He goes to Nguyen Du Primary School in Ho Chi Minh City. He loves school because he has many good friends there.

Every day, Minh wakes up at six o'clock. He always has breakfast with his family. He usually walks to school with his little brother.

At school, Minh studies many subjects. He loves maths and science. He sometimes goes to the science club after school. Minh often practises the piano on Tuesdays and Thursdays. He is a good musician!

At break time, Minh usually plays football with his friends. He is good at sports. He always does his homework in the evening before dinner.

Minh's teacher says he is clever and hardworking. Minh wants to be a scientist one day. He never forgets to study hard. His favourite memory of school is winning a prize for science last year!`,
      questions: [
        { type: "multiple_choice", question: "What time does Minh wake up?", options: ["Five o'clock", "Six o'clock", "Seven o'clock", "Eight o'clock"], answer: "Six o'clock" },
        { type: "true_false", question: "Minh always walks to school alone.", answer: false },
        { type: "multiple_choice", question: "Which subjects does Minh love?", options: ["Art and music", "Maths and science", "History and geography", "English and PE"], answer: "Maths and science" },
        { type: "true_false", question: "Minh sometimes goes to the science club.", answer: true },
        { type: "multiple_choice", question: "When does Minh do his homework?", options: ["In the morning", "At break time", "In the evening before dinner", "After dinner"], answer: "In the evening before dinner" },
        { type: "short_answer", question: "What did Minh win last year? (two words)", answer: "science prize" },
      ]
    },
    listenFill: [
      { audio: "I often walk to school, but I sometimes ride my bike.", display: "I often walk to school, but I ___ ride my bike.", answers: ["sometimes"] },
      { audio: "She always has breakfast with her mum and dad.", display: "She ___ has breakfast with her mum and dad.", answers: ["always"] },
      { audio: "He usually does his homework after school.", display: "He ___ does his homework after school.", answers: ["usually"] },
      { audio: "I never forget to wear my uniform.", display: "I ___ forget to wear my uniform.", answers: ["never"] },
      { audio: "He studies maths every weekday.", display: "He studies maths every ___.", answers: ["weekday"] },
      { audio: "We go to the fitness centre on Wednesdays.", display: "We go to the ___ centre on Wednesdays.", answers: ["fitness"] },
      { audio: "Jenny brushes her hair every day.", display: "Jenny ___ her hair every day.", answers: ["brushes"] },
      { audio: "The verb goes ends with the z sound.", display: "The verb 'goes' ends with the ___ sound.", answers: ["/z/"] },
      { audio: "She always brushes her teeth before bed.", display: "She ___ brushes her teeth before bed.", answers: ["always"] },
      { audio: "My teacher often gives interesting science lessons.", display: "My teacher ___ gives interesting science lessons.", answers: ["often"] },
      { audio: "I sometimes ride my bike to school.", display: "I sometimes ___ my bike to school.", answers: ["ride"] },
      { audio: "We never eat in the classroom.", display: "We ___ eat in the classroom.", answers: ["never"] },
      { audio: "He usually studies maths at the library.", display: "He usually studies ___ at the library.", answers: ["maths"] },
      { audio: "I often play football at break time.", display: "I often play football at ___ time.", answers: ["break"] },
      { audio: "My classmates always wear their uniforms.", display: "My classmates always wear their ___.", answers: ["uniforms"] },
      { audio: "He sometimes goes to the science club.", display: "He sometimes goes to the ___ club.", answers: ["science"] },
      { audio: "She is always late for class.", display: "She is ___ late for class.", answers: ["always"] },
      { audio: "We usually study geography on Tuesdays.", display: "We usually study ___ on Tuesdays.", answers: ["geography"] },
      { audio: "He never forgets to bring his lunchbox.", display: "He never forgets to bring his ___.", answers: ["lunchbox"] },
      { audio: "I love maths because I enjoy solving problems.", display: "I love maths because I enjoy solving ___.", answers: ["problems"] },
    ],
    pronunciation: {
      focus: "Third person -s endings",
      words: ["goes /z/", "starts /s/", "dances /ɪz/", "plays /z/", "walks /s/", "watches /ɪz/"],
      chant: ""
    },
    review: {
      errorCorrection: [
        { wrong: "He do his homework in the evening.", display: "He ___ his homework in the evening.", answer: "does", hint: "He/She/It → does (thêm s/es)" },
        { wrong: "We plays football at the weekends.", display: "We ___ football at the weekends.", answer: "play", hint: "We/They/You → play (không thêm s)" },
        { wrong: "My brother practise sport on Sundays.", display: "My brother ___ sport on Sundays.", answer: "practises", hint: "My brother (số ít) → practises" },
        { wrong: "Tom have music class on Sundays.", display: "Tom ___ music class on Sundays.", answer: "has", hint: "Tom (số ít) → has" },
        { wrong: "Lucy wash her bike in the morning.", display: "Lucy ___ her bike in the morning.", answer: "washes", hint: "wash + es vì kết thúc bằng sh" },
        { wrong: "Linh find solutions to her students' problems.", display: "Linh ___ solutions to her students' problems.", answer: "finds", hint: "Linh (số ít) → finds" },
        { wrong: "She start her lessons at 8 a.m.", display: "She ___ her lessons at 8 a.m.", answer: "starts", hint: "She → starts" },
        { wrong: "He study maths every weekday.", display: "He ___ maths every weekday.", answer: "studies", hint: "study + He → studies (y → ies)" },
      ],
      oddOneOut: [
        { words: ["Always", "Sometimes", "Never", "Exercise"], answer: "Exercise", reason: "Exercise là động từ/danh từ, còn lại đều là trạng từ tần suất" },
        { words: ["Science", "Maths", "English", "Fitness"], answer: "Fitness", reason: "Fitness không phải môn học, còn lại đều là môn học ở trường" },
        { words: ["Morning", "Evening", "Afternoon", "History"], answer: "History", reason: "History là môn học, còn lại đều là thời gian trong ngày" },
        { words: ["Usually", "Often", "Sometimes", "Maths"], answer: "Maths", reason: "Maths là môn học, còn lại đều là trạng từ tần suất" },
        { words: ["Monday", "Tuesday", "Wednesday", "Uniform"], answer: "Uniform", reason: "Uniform là trang phục, còn lại đều là ngày trong tuần" },
        { words: ["Walk", "Practise", "Wear", "Always"], answer: "Always", reason: "Always là trạng từ tần suất, còn lại đều là động từ hành động" },
      ],
    },
  },
  {
    id: 4,
    title: "Free Time",
    color: "yellow",
    icon: "🎸",
    vocabulary: [
      { word: "collect stamps", pronunciation: "/kəˈlekt stæmps/", meaning: "to gather and keep postage stamps as a hobby", example: "My grandfather collects stamps from many countries." },
      { word: "go ice-skating", pronunciation: "/ɡəʊ ˈaɪs skeɪtɪŋ/", meaning: "to slide across ice while wearing special boots with blades", example: "We go ice-skating every winter." },
      { word: "make a paper bird", pronunciation: "/meɪk ə ˈpeɪpə bɜːd/", meaning: "to fold paper into the shape of a bird (origami)", example: "She can make a paper bird very quickly." },
      { word: "play the piano", pronunciation: "/pleɪ ðə piˈænəʊ/", meaning: "to perform music on a piano by pressing its keys", example: "He plays the piano for thirty minutes every day." },
      { word: "read comic books", pronunciation: "/riːd ˈkɒmɪk bʊks/", meaning: "to look at and read books with pictures that tell a story", example: "She loves to read comic books after school." },
      { word: "watch movies", pronunciation: "/wɒtʃ ˈmuːviz/", meaning: "to look at and follow a film at the cinema or at home", example: "We watch movies together on Friday evenings." },
      { word: "be good at", pronunciation: "/biː ɡʊd æt/", meaning: "to have skill or ability in something; to do something well", example: "She is good at playing football." },
      { word: "enjoy", pronunciation: "/ɪnˈdʒɔɪ/", meaning: "to get pleasure and happiness from doing something", example: "I enjoy reading comic books very much." },
      { word: "amusement park", pronunciation: "/əˈmjuːzmənt pɑːk/", meaning: "a park with rides, games and entertainment for having fun", example: "We went to the amusement park at the weekend." },
      { word: "bookshop", pronunciation: "/ˈbʊkʃɒp/", meaning: "a shop where you can buy books", example: "Can I go to the bookshop to buy a new story book?" },
      { word: "cinema", pronunciation: "/ˈsɪnəmə/", meaning: "a building where people go to watch films on a big screen", example: "Let's go to the cinema this Saturday!" },
      { word: "sports centre", pronunciation: "/spɔːts ˈsentə(r)/", meaning: "a building with facilities for playing many different sports", example: "She trains at the sports centre three times a week." },
      { word: "hobby", pronunciation: "/ˈhɒbi/", meaning: "an activity you do regularly for pleasure in your free time", example: "My favourite hobby is collecting stamps." },
      { word: "roller coaster", pronunciation: "/ˈrəʊlə ˈkəʊstə(r)/", meaning: "a fast ride at an amusement park that goes up and down steep tracks", example: "Are you brave enough to ride the roller coaster?" },
      { word: "go bowling", pronunciation: "/ɡəʊ ˈbəʊlɪŋ/", meaning: "to play a game where you roll a heavy ball to knock down pins", example: "Let's go bowling this weekend!" },
      { word: "draw", pronunciation: "/drɔː/", meaning: "to make pictures using a pencil or pen", example: "She loves to draw animals in her free time." },
      { word: "paint", pronunciation: "/peɪnt/", meaning: "to make a picture using paint and a brush", example: "He paints beautiful pictures of the countryside." },
      { word: "dance", pronunciation: "/dɑːns/", meaning: "to move your body in rhythm, usually to music", example: "She dances at the school show every year." },
      { word: "garden", pronunciation: "/ˈɡɑːdn/", meaning: "a piece of land near a house where you can grow plants and flowers", example: "He plants flowers in his garden at weekends." },
      { word: "camp", pronunciation: "/kæmp/", meaning: "to stay outside overnight in a tent, usually in nature", example: "We go camping in the forest every summer." },
      { word: "craft", pronunciation: "/krɑːft/", meaning: "an activity where you make things with your hands", example: "She made a beautiful craft for her mother." },
      { word: "guitar", pronunciation: "/ɡɪˈtɑː(r)/", meaning: "a musical instrument with strings that you play with your fingers", example: "He is learning to play the guitar." },
      { word: "talent", pronunciation: "/ˈtælənt/", meaning: "a natural skill or ability at something", example: "She has a real talent for singing." },
      { word: "weekend", pronunciation: "/ˌwiːkˈend/", meaning: "Saturday and Sunday, the days when people do not go to school", example: "I relax and watch movies at the weekend." },
      { word: "bicycle", pronunciation: "/ˈbaɪsɪkl/", meaning: "a vehicle with two wheels that you ride by pushing pedals", example: "She rides her bicycle to the park every Saturday." },
      { word: "swim", pronunciation: "/swɪm/", meaning: "to move through water by moving your arms and legs", example: "He swims at the sports centre twice a week." },
      { word: "relax", pronunciation: "/rɪˈlæks/", meaning: "to rest and do things you enjoy; to stop working or worrying", example: "I relax by reading books in the evening." },
      { word: "instrument", pronunciation: "/ˈɪnstrəmənt/", meaning: "an object used to make music, such as a piano or violin", example: "Which instrument do you play?" },
      { word: "picnic", pronunciation: "/ˈpɪknɪk/", meaning: "a meal eaten outside, usually in a park or countryside", example: "Our family has a picnic in the park every Sunday." },
      { word: "ride", pronunciation: "/raɪd/", meaning: "to sit on a bicycle or horse and control it as it moves", example: "She rides her horse every Saturday morning." },
      { word: "eat out", pronunciation: "/iːt aʊt/", meaning: "to have a meal at a restaurant instead of at home", example: "We eat out at a restaurant on special occasions." },
      { word: "free time", pronunciation: "/friː taɪm/", meaning: "time when you do not have to work or study; leisure time", example: "What do you do in your free time?" },
    ],
    grammar: [
      {
        id: "g1",
        type: "multiple_choice",
        question: "What is she good at? — She's good at ___ football.",
        options: ["play", "playing", "played", "plays"],
        answer: "playing",
        explanation: "good at + V-ing"
      },
      {
        id: "g2",
        type: "multiple_choice",
        question: "Can I go to the bookshop now? — No, you ___.",
        options: ["can", "can't", "cannot't", "aren't"],
        answer: "can't",
        explanation: "can't = cannot (phủ định của can)"
      },
      {
        id: "g3",
        type: "fill_blank",
        question: "I enjoy ___ (swim) in the pool.",
        answer: "swimming",
        hint: "enjoy + V-ing"
      },
      {
        id: "g4",
        type: "fill_blank",
        question: "She ___ good at playing the violin.",
        answer: "is",
        hint: "be good at..."
      },
      { id: "g5", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["She", "is", "good", "at", "playing", "football", "."], answer: "She is good at playing football ." },
      { id: "g6", type: "fill_blank", question: "I enjoy ___ (draw) pictures in my free time.", answer: "drawing", hint: "enjoy + V-ing" },
      { id: "g7", type: "multiple_choice", question: "Can I go to the cinema? — No, you ___.", options: ["can", "can't", "couldn't", "shouldn't"], answer: "can't", explanation: "can't = cannot = không được" },
      { id: "g8", type: "fill_blank", question: "She ___ good at dancing.", answer: "is", hint: "be good at..." },
      { id: "g9", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["I", "enjoy", "watching", "movies", "at", "weekends", "."], answer: "I enjoy watching movies at weekends ." },
      { id: "g10", type: "multiple_choice", question: "She likes ___ comics in her free time.", options: ["read", "reading", "reads", "to reading"], answer: "reading", explanation: "like + V-ing" },
      { id: "g11", type: "fill_blank", question: "He is ___ at playing the guitar.", answer: "good", hint: "be ___ at" },
      { id: "g12", type: "multiple_choice", question: "What ___ she good at?", options: ["is", "are", "was", "were"], answer: "is", explanation: "Present tense với chủ ngữ she" },
      { id: "g13", type: "fill_blank", question: "I love ___ (collect) stamps from other countries.", answer: "collecting", hint: "love + V-ing" },
    ],
    dictation: [
      "She is good at playing football.",
      "I enjoy reading comic books in my free time.",
      "Can I go to the bookshop now?",
      "I often go swimming. I am good at swimming.",
      "He enjoys drawing and painting at weekends.",
      "She is good at playing the piano.",
      "Can I go to the cinema with my friends?",
      "I like collecting stamps from different countries.",
      "What are you good at in your free time?",
      "He enjoys watching movies and reading comic books.",
      "I love going ice-skating in the winter.",
      "She is really good at making paper birds.",
      "We enjoy going to the amusement park together.",
    ],
    writing: {
      title: "My Free Time",
      template: `In my free time, I like [activity].
I am good at [skill].
I also enjoy [activity].
On weekends, I [usually/often] [activity] with [person].
My favourite place to go is [place] because [reason].`,
      prompts: [
        "Dùng like/enjoy/be good at + V-ing mô tả sở thích của em",
        "Viết về hoạt động cuối tuần dùng can/can't",
        "Mô tả địa điểm yêu thích (amusement park, cinema...)",
      ]
    },
    speaking: [
      "What are you good at? Tell me 3 things! (30 seconds)",
      "Describe your favourite free time activity using like, enjoy, be good at! (30 seconds)",
      "Where do you go in your free time? Why do you like it? (30 seconds)",
    ],
    reading: {
      title: "Amy's Free Time",
      passage: `Amy is eleven years old and she loves her free time. She is good at many things!

After school, Amy often reads comic books. She enjoys reading funny stories and looking at the colourful pictures. She collects comics from many different countries.

On weekends, Amy goes to the cinema with her family. She loves animated films and comedies. Her favourite film is about a girl who makes a paper bird that can fly.

Amy is also good at playing the piano. She practises for thirty minutes every day. She enjoys making music and playing songs for her friends.

In the summer, Amy goes ice-skating with her cousin Jake. Jake is not good at skating, but he always tries hard. Amy helps him practise. "Don't give up!" she says. "I can't do it," says Jake. "Yes, you can!" says Amy. She is a good friend.

Amy's mum says: "My daughter enjoys everything she does. That is why she is so happy!"`,
      questions: [
        { type: "multiple_choice", question: "What does Amy collect?", options: ["Stamps", "Comic books", "Photos", "Puppets"], answer: "Comic books" },
        { type: "true_false", question: "Amy goes to the cinema with her friends.", answer: false },
        { type: "multiple_choice", question: "How long does Amy practise piano every day?", options: ["Ten minutes", "Twenty minutes", "Thirty minutes", "One hour"], answer: "Thirty minutes" },
        { type: "true_false", question: "Jake is very good at ice-skating.", answer: false },
        { type: "multiple_choice", question: "Where does Amy go ice-skating?", options: ["With her family", "Alone", "With her cousin Jake", "With her teacher"], answer: "With her cousin Jake" },
        { type: "short_answer", question: "What does Amy say to encourage Jake? (three words)", answer: "Don't give up" },
      ]
    },
    listenFill: [
      { audio: "She is good at playing football.", display: "She is good at ___ football.", answers: ["playing"] },
      { audio: "I enjoy reading comic books in my free time.", display: "I enjoy ___ comic books in my free time.", answers: ["reading"] },
      { audio: "Can I go to the bookshop now?", display: "Can I go to the ___ now?", answers: ["bookshop"] },
      { audio: "I often go swimming. I am good at swimming.", display: "I often go swimming. I am good ___ swimming.", answers: ["at"] },
      { audio: "She goes ice-skating every winter.", display: "She goes ___-skating every winter.", answers: ["ice"] },
      { audio: "Dad, I need some books. Can I go to the bookshop now?", display: "Dad, I need some books. Can I go to the bookshop ___?", answers: ["now"] },
      { audio: "I like playing the piano and collecting stamps.", display: "I like playing the piano and ___ stamps.", answers: ["collecting"] },
      { audio: "He enjoys drawing and painting at weekends.", display: "He enjoys ___ and painting at weekends.", answers: ["drawing"] },
      { audio: "She is good at playing the piano.", display: "She is good at playing the ___.", answers: ["piano"] },
      { audio: "I love going to the amusement park.", display: "I love going to the ___ park.", answers: ["amusement"] },
      { audio: "We enjoy bowling at the sports centre.", display: "We enjoy ___ at the sports centre.", answers: ["bowling"] },
      { audio: "He is really good at making paper birds.", display: "He is really good at making paper ___.", answers: ["birds"] },
      { audio: "She likes collecting stamps from many countries.", display: "She likes ___ stamps from many countries.", answers: ["collecting"] },
      { audio: "What are you good at in your free time?", display: "What are you good ___ in your free time?", answers: ["at"] },
      { audio: "I enjoy watching movies with my family.", display: "I enjoy ___ movies with my family.", answers: ["watching"] },
      { audio: "Can I ride my bicycle to the park?", display: "Can I ___ my bicycle to the park?", answers: ["ride"] },
      { audio: "She loves dancing at the school show.", display: "She loves ___ at the school show.", answers: ["dancing"] },
      { audio: "He goes bowling with his friends at weekends.", display: "He goes ___ with his friends at weekends.", answers: ["bowling"] },
      { audio: "I am good at reading and drawing.", display: "I am good at reading and ___.", answers: ["drawing"] },
      { audio: "My favourite hobby is collecting comics.", display: "My favourite ___ is collecting comics.", answers: ["hobby"] },
    ],
    pronunciation: {
      focus: "Wh- words",
      words: ["when /wen/", "who /huː/", "wood /wʊd/", "hobby /ˈhɒbi/"],
      chant: ""
    },
    review: {
      errorCorrection: [
        { wrong: "Mum, can I to go the park?", display: "Mum, can I ___ to the park?", answer: "go", hint: "can + V nguyên mẫu (không có 'to')" },
        { wrong: "Mum, can you plays the piano?", display: "Mum, can you ___ the piano?", answer: "play", hint: "can + V nguyên mẫu (không chia)" },
        { wrong: "Dad, can he goes to the museum?", display: "Dad, can he ___ to the museum?", answer: "go", hint: "can + V nguyên mẫu" },
        { wrong: "She enjoys collect stamps.", display: "She enjoys ___ stamps.", answer: "collecting", hint: "enjoy + V-ing" },
        { wrong: "I am good to play football.", display: "I am good ___ play football.", answer: "at", hint: "be good at (không dùng to)" },
        { wrong: "Does she likes reading comic books?", display: "Does she ___ reading comic books?", answer: "like", hint: "Sau does/do dùng V nguyên mẫu" },
        { wrong: "He like to go bowling every weekend.", display: "He ___ to go bowling every weekend.", answer: "likes", hint: "He → likes (thêm s)" },
        { wrong: "I enjoy to watch movies.", display: "I enjoy ___ movies.", answer: "watching", hint: "enjoy + V-ing" },
      ],
      oddOneOut: [
        { words: ["Cinema", "Restaurant", "Sports Centre", "Collect"], answer: "Collect", reason: "Collect là động từ, còn lại đều là địa điểm vui chơi" },
        { words: ["Bowling", "Swimming", "Reading", "Bookshop"], answer: "Bookshop", reason: "Bookshop là địa điểm, còn lại đều là hoạt động giải trí" },
        { words: ["Piano", "Violin", "Guitar", "Amusement"], answer: "Amusement", reason: "Amusement là tính từ/danh từ, còn lại đều là nhạc cụ" },
        { words: ["Comic books", "Stamps", "Photos", "Collect"], answer: "Collect", reason: "Collect là động từ, còn lại đều là đồ vật có thể sưu tầm" },
        { words: ["Restaurant", "Bookshop", "Amusement park", "Exciting"], answer: "Exciting", reason: "Exciting là tính từ, còn lại đều là địa điểm" },
        { words: ["Ice-skating", "Bowling", "Collecting stamps", "Cinema"], answer: "Cinema", reason: "Cinema là địa điểm, còn lại đều là hoạt động giải trí" },
      ],
    },
  },
  {
    id: 5,
    title: "Celebrations",
    color: "red",
    icon: "🎉",
    vocabulary: [
      { word: "bonfire", pronunciation: "/ˈbɒnfaɪə(r)/", meaning: "a large outdoor fire made to celebrate something or burn waste", example: "We light a bonfire on New Year's Eve." },
      { word: "celebration", pronunciation: "/ˌselɪˈbreɪʃn/", meaning: "a special event or party to mark an important occasion", example: "Tet is the biggest celebration in Vietnam." },
      { word: "colourful", pronunciation: "/ˈkʌləfl/", meaning: "having many bright and different colours", example: "There are colourful lanterns all around the street." },
      { word: "festival", pronunciation: "/ˈfestɪvl/", meaning: "a time when people celebrate something special, often with events and traditions", example: "Holi is a famous festival in India." },
      { word: "powder", pronunciation: "/ˈpaʊdə(r)/", meaning: "a fine dry substance made of tiny particles", example: "At Holi, people throw coloured powder at each other." },
      { word: "throw", pronunciation: "/θrəʊ/", meaning: "to send something through the air by moving your arm quickly", example: "Children throw powder and water at the Holi festival." },
      { word: "lantern", pronunciation: "/ˈlæntən/", meaning: "a light in a container, often carried by hand or hung as decoration", example: "Children carry lanterns at the Mid-Autumn Festival." },
      { word: "lion dance", pronunciation: "/ˈlaɪən dɑːns/", meaning: "a traditional performance where people wear a lion costume and dance", example: "We watched a wonderful lion dance in the street." },
      { word: "mooncake", pronunciation: "/ˈmuːnkeɪk/", meaning: "a round cake eaten at the Mid-Autumn Festival in Asia", example: "Families eat mooncakes and look at the moon together." },
      { word: "parade", pronunciation: "/pəˈreɪd/", meaning: "a line of people or vehicles moving through a street to celebrate something", example: "The New Year parade is very exciting." },
      { word: "memory", pronunciation: "/ˈmeməri/", meaning: "something that you remember from the past; a recollection", example: "That festival is one of my best memories." },
      { word: "lunar month", pronunciation: "/ˈluːnə mʌnθ/", meaning: "a month based on the cycle of the moon, used in some Asian calendars", example: "Tet falls in the first lunar month of the year." },
      { word: "tradition", pronunciation: "/trəˈdɪʃn/", meaning: "a custom or belief that has been passed down from generation to generation", example: "It is a tradition to give lucky money at Tet." },
      { word: "costume", pronunciation: "/ˈkɒstjuːm/", meaning: "special clothes worn for a celebration, performance or pretend play", example: "She wore a beautiful costume at the festival." },
      { word: "firework", pronunciation: "/ˈfaɪəwɜːk/", meaning: "a device that makes loud bangs and colourful lights in the sky", example: "There were amazing fireworks on New Year's Eve." },
      { word: "candle", pronunciation: "/ˈkændl/", meaning: "a stick of wax with a wick that you burn to give light", example: "We light candles to celebrate birthdays." },
      { word: "wish", pronunciation: "/wɪʃ/", meaning: "something you hope will happen; a desire for something good", example: "She made a wish before blowing out the candles." },
      { word: "invite", pronunciation: "/ɪnˈvaɪt/", meaning: "to ask someone to come to an event or activity", example: "He invited all his classmates to his birthday party." },
      { word: "decorate", pronunciation: "/ˈdekəreɪt/", meaning: "to make a place look more attractive by adding things to it", example: "We decorate the classroom for the Tet celebration." },
      { word: "gather", pronunciation: "/ˈɡæðə(r)/", meaning: "to come together in a group, especially for a special occasion", example: "Families gather to celebrate Tet together." },
      { word: "gift", pronunciation: "/ɡɪft/", meaning: "something you give to someone to show you care about them; a present", example: "She received many gifts on her birthday." },
      { word: "Mid-Autumn Festival", pronunciation: "/mɪd ˈɔːtəm ˈfestɪvl/", meaning: "a traditional festival celebrated in Vietnam and China in the middle of autumn", example: "Children love the Mid-Autumn Festival." },
      { word: "went", pronunciation: "/went/", meaning: "past tense of 'go'; moved to a different place", example: "I went to a birthday party last weekend." },
      { word: "had", pronunciation: "/hæd/", meaning: "past tense of 'have'; possessed or experienced something", example: "We had a wonderful time at the festival." },
      { word: "did", pronunciation: "/dɪd/", meaning: "past tense of 'do'; performed an action", example: "My mother did a lot of cooking before Tet." },
      { word: "balloon", pronunciation: "/bəˈluːn/", meaning: "a small, thin rubber bag filled with air or gas, used as decoration", example: "The room was full of colourful balloons." },
      { word: "special", pronunciation: "/ˈspeʃl/", meaning: "different from the ordinary; more important or wonderful than usual", example: "Tet is a very special time for Vietnamese families." },
      { word: "last year", pronunciation: "/lɑːst jɪə(r)/", meaning: "the year before the current one", example: "Last year, I went to the Mid-Autumn Festival." },
      { word: "last weekend", pronunciation: "/lɑːst ˈwiːkend/", meaning: "the Saturday and Sunday just before the current week", example: "I went to a party last weekend." },
      { word: "celebrate", pronunciation: "/ˈselɪbreɪt/", meaning: "to do something enjoyable to mark a special occasion", example: "We celebrate Tet with our whole family." },
    ],
    grammar: [
      {
        id: "g1",
        type: "multiple_choice",
        question: "___ buy some powder for the Holi Festival.",
        options: ["Please", "Don't", "Let's", "No"],
        answer: "Please",
        explanation: "Please + verb = lịch sự khi nhờ ai đó"
      },
      {
        id: "g2",
        type: "multiple_choice",
        question: "I ___ to a birthday party last weekend.",
        options: ["go", "goes", "went", "gone"],
        answer: "went",
        explanation: "go → went (quá khứ bất quy tắc)"
      },
      {
        id: "g3",
        type: "fill_blank",
        question: "He ___ a lot of work during Christmas. (have)",
        answer: "had",
        hint: "have → ___ (quá khứ bất quy tắc)"
      },
      {
        id: "g4",
        type: "fill_blank",
        question: "My mother ___ a lot of housework before Tet. (do)",
        answer: "did",
        hint: "do → ___ (quá khứ)"
      },
      { id: "g5", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["Don't", "be", "late", "for", "the", "festival", "!"], answer: "Don't be late for the festival !" },
      { id: "g6", type: "fill_blank", question: "She ___ (go) to the Mid-Autumn Festival last year.", answer: "went", hint: "go → ___ (bất quy tắc)" },
      { id: "g7", type: "multiple_choice", question: "___ make some mooncakes together!", options: ["Please", "Don't", "Let's", "No"], answer: "Let's", explanation: "Let's + verb = đề nghị làm cùng nhau" },
      { id: "g8", type: "fill_blank", question: "We ___ (have) a lot of fun at the Holi Festival.", answer: "had", hint: "have → ___ (quá khứ)" },
      { id: "g9", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["Please", "don't", "throw", "powder", "at", "me", "!"], answer: "Please don't throw powder at me !" },
      { id: "g10", type: "multiple_choice", question: "Last year, they ___ to the festival in their costumes.", options: ["go", "goes", "went", "going"], answer: "went", explanation: "go → went (quá khứ bất quy tắc)" },
      { id: "g11", type: "fill_blank", question: "___ buy some candles for the party.", answer: "Please", hint: "Lịch sự khi nhờ ai đó" },
      { id: "g12", type: "multiple_choice", question: "She ___ a beautiful lion dance last Tet.", options: ["see", "sees", "saw", "seen"], answer: "saw", explanation: "see → saw (quá khứ bất quy tắc)" },
      { id: "g13", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["We", "went", "to", "the", "Mid-Autumn", "Festival", "together", "."], answer: "We went to the Mid-Autumn Festival together ." },
    ],
    dictation: [
      "Please buy some powder for the Holi Festival.",
      "Don't be late for any meetings with your teachers.",
      "I went to a birthday party last weekend.",
      "My mother did a lot of housework before Tet holiday.",
      "Let's make some mooncakes for the festival.",
      "She went to the Mid-Autumn Festival last year.",
      "Please don't throw powder at me!",
      "We had a wonderful time at the Holi celebration.",
      "He saw the lion dance at the parade.",
      "Don't forget to bring a lantern to the festival.",
      "I did a lot of cooking before the Tet holiday.",
      "Let's go to the parade together this evening.",
      "They went to the festival in their costumes.",
    ],
    writing: {
      title: "My Favourite Festival",
      template: `My favourite festival is [festival name].
It is [when] every year.
During this festival, people [activity].
I [went/had/did] [activity] last year.
My favourite memory is [memory].
I love this festival because [reason].`,
      prompts: [
        "Mô tả lễ Tết hoặc Trung Thu dùng quá khứ đơn (went, had, did)",
        "Viết 3 câu dùng Please, Don't, Let's về lễ hội",
        "Kể về kỉ niệm đáng nhớ nhất trong một lễ hội",
      ]
    },
    speaking: [
      "Tell me about your favourite Vietnamese festival! (45 seconds)",
      "What did you do during Tet last year? (30 seconds)",
      "Describe the Mid-Autumn Festival using colourful, lantern, mooncake! (30 seconds)",
    ],
    reading: {
      title: "The Holi Festival",
      passage: `The Holi Festival is a famous celebration in India. People celebrate Holi every spring. It is a colourful and exciting festival!

On Holi, people throw coloured powder and water at each other. Everyone gets very colourful! There are red, blue, yellow, green and pink colours everywhere. People sing and dance in the streets.

Last year, my family went to see a Holi celebration in our city. My little sister did not want to get colourful at first. "Don't throw powder at me!" she said. But then she joined in and had a lot of fun. We all laughed and danced together. It was a wonderful memory!

In Vietnam, we have the Mid-Autumn Festival. Children carry colourful lanterns and eat mooncakes. There is a lion dance in the street. The parade is very exciting! Last year, I went to the Mid-Autumn Festival with my grandparents. We had mooncakes and watched the lion dance together. It was amazing!

Both Holi and the Mid-Autumn Festival are wonderful celebrations. Let's hope for many more happy festival memories!`,
      questions: [
        { type: "multiple_choice", question: "When do people celebrate Holi?", options: ["In winter", "In summer", "In spring", "In autumn"], answer: "In spring" },
        { type: "true_false", question: "At Holi, people throw coloured powder at each other.", answer: true },
        { type: "true_false", question: "The writer's sister enjoyed Holi from the very beginning.", answer: false },
        { type: "multiple_choice", question: "What do Vietnamese children carry at Mid-Autumn Festival?", options: ["Mooncakes", "Colourful lanterns", "Powder", "Bonfires"], answer: "Colourful lanterns" },
        { type: "multiple_choice", question: "What did the writer do with their grandparents?", options: ["Threw powder", "Watched a parade and ate mooncakes", "Danced in the street", "Made lanterns"], answer: "Watched a parade and ate mooncakes" },
        { type: "short_answer", question: "What food do people eat at Mid-Autumn Festival? (one word)", answer: "mooncakes" },
      ]
    },
    listenFill: [
      { audio: "Please buy some powder for the Holi Festival.", display: "Please ___ some powder for the Holi Festival.", answers: ["buy"] },
      { audio: "Don't be late for the celebration!", display: "___ be late for the celebration!", answers: ["Don't"] },
      { audio: "I went to a birthday party last weekend.", display: "I ___ to a birthday party last weekend.", answers: ["went"] },
      { audio: "My mother did a lot of housework before Tet holiday.", display: "My mother ___ a lot of housework before Tet holiday.", answers: ["did"] },
      { audio: "There are colourful lanterns everywhere.", display: "There are ___ lanterns everywhere.", answers: ["colourful"] },
      { audio: "We watched the lion dance together.", display: "We watched the lion ___ together.", answers: ["dance"] },
      { audio: "He had a lot of work during Christmas.", display: "He ___ a lot of work during Christmas.", answers: ["had"] },
      { audio: "Let's make some mooncakes for the festival.", display: "___ make some mooncakes for the festival.", answers: ["Let's"] },
      { audio: "She went to the Mid-Autumn Festival last year.", display: "She went to the Mid-Autumn ___ last year.", answers: ["Festival"] },
      { audio: "Please don't throw powder at me.", display: "Please don't ___ powder at me.", answers: ["throw"] },
      { audio: "We had a wonderful time at the celebration.", display: "We ___ a wonderful time at the celebration.", answers: ["had"] },
      { audio: "Don't forget to bring a lantern to the festival.", display: "Don't forget to bring a ___ to the festival.", answers: ["lantern"] },
      { audio: "I did a lot of cooking before the Tet holiday.", display: "I ___ a lot of cooking before the Tet holiday.", answers: ["did"] },
      { audio: "Let's go to the parade together this evening.", display: "Let's go to the ___ together this evening.", answers: ["parade"] },
      { audio: "They went to the festival in their costumes.", display: "They went to the festival in their ___.", answers: ["costumes"] },
      { audio: "Please decorate the classroom for Tet.", display: "Please ___ the classroom for Tet.", answers: ["decorate"] },
      { audio: "We saw beautiful fireworks last New Year's Eve.", display: "We ___ beautiful fireworks last New Year's Eve.", answers: ["saw"] },
      { audio: "Children carry lanterns at the Mid-Autumn Festival.", display: "Children ___ lanterns at the Mid-Autumn Festival.", answers: ["carry"] },
      { audio: "She made a wish before blowing out the candles.", display: "She made a ___ before blowing out the candles.", answers: ["wish"] },
      { audio: "He gathered with his family to celebrate Tet.", display: "He ___ with his family to celebrate Tet.", answers: ["gathered"] },
    ],
    pronunciation: {
      focus: "Silent letters",
      words: ["answer /ˈɑːnsə/", "handsome /ˈhænsəm/"],
      chant: ""
    },
    review: {
      errorCorrection: [
        { wrong: "Please buying some powder for the Holi Festival.", display: "Please ___ some powder for the Holi Festival.", answer: "buy", hint: "Please + V nguyên mẫu (câu mệnh lệnh)" },
        { wrong: "Don't is late for any meetings.", display: "Don't ___ late for any meetings.", answer: "be", hint: "Don't be = đừng (phủ định mệnh lệnh)" },
        { wrong: "Let's hoping for a bright future.", display: "Let's ___ for a bright future.", answer: "hope", hint: "Let's + V nguyên mẫu" },
        { wrong: "There is six colourful balloons on the wall.", display: "There ___ six colourful balloons on the wall.", answer: "are", hint: "Six balloons (số nhiều) → are" },
        { wrong: "I go to a birthday party last weekend.", display: "I ___ to a birthday party last weekend.", answer: "went", hint: "Last weekend → quá khứ, go → went" },
        { wrong: "He hads a lot of work during Christmas.", display: "He ___ a lot of work during Christmas.", answer: "had", hint: "Quá khứ của have là had (không thêm s)" },
        { wrong: "My mother dided a lot of housework before Tet.", display: "My mother ___ a lot of housework before Tet.", answer: "did", hint: "Quá khứ của do là did" },
        { wrong: "In the Holi festival last year, we go into the streets.", display: "In the Holi festival last year, we ___ into the streets.", answer: "went", hint: "Last year → quá khứ, go → went" },
      ],
      oddOneOut: [
        { words: ["Went", "Did", "Had", "Tall"], answer: "Tall", reason: "Tall là tính từ, còn lại đều là động từ quá khứ bất quy tắc" },
        { words: ["Last week", "Yesterday", "Last month", "Today"], answer: "Today", reason: "Today chỉ thời gian hiện tại, còn lại chỉ thời gian trong quá khứ" },
        { words: ["Lion dance", "Mooncake", "Lantern", "Go"], answer: "Go", reason: "Go là động từ, còn lại đều là biểu tượng lễ hội" },
        { words: ["Last night", "Last month", "Last week", "Can"], answer: "Can", reason: "Can là động từ khuyết thiếu, còn lại đều là cụm từ chỉ thời gian quá khứ" },
        { words: ["Watch", "Go", "Make", "Waiter"], answer: "Waiter", reason: "Waiter là danh từ (người phục vụ), còn lại đều là động từ" },
        { words: ["Do", "Played", "Watched", "Had"], answer: "Do", reason: "Do là hiện tại đơn, còn lại đều là dạng quá khứ của động từ" },
      ],
    },
  },
  {
    id: 6,
    title: "Food",
    color: "orange",
    icon: "🍜",
    vocabulary: [
      { word: "delicious", pronunciation: "/dɪˈlɪʃəs/", meaning: "having a very pleasant and enjoyable taste", example: "The pho noodle soup is absolutely delicious." },
      { word: "crispy", pronunciation: "/ˈkrɪspi/", meaning: "pleasantly hard and making a sharp sound when you bite it", example: "I love crispy fried chicken." },
      { word: "salty", pronunciation: "/ˈsɔːlti/", meaning: "tasting of or containing salt", example: "This soup is too salty for me." },
      { word: "sour", pronunciation: "/ˈsaʊə(r)/", meaning: "having a sharp, acidic taste like lemon or vinegar", example: "Lemons and limes are very sour." },
      { word: "spicy", pronunciation: "/ˈspaɪsi/", meaning: "having a strong, hot flavour from spices or chilli", example: "Vietnamese food is often spicy and delicious." },
      { word: "sweet", pronunciation: "/swiːt/", meaning: "having the pleasant taste of sugar", example: "Mooncakes are sweet and soft." },
      { word: "tasty", pronunciation: "/ˈteɪsti/", meaning: "having a good, pleasant flavour; nice to eat", example: "This homemade cake is really tasty!" },
      { word: "bowl", pronunciation: "/bəʊl/", meaning: "a round deep dish used for eating soup or cereal", example: "She ordered a big bowl of noodles." },
      { word: "plate", pronunciation: "/pleɪt/", meaning: "a flat dish used to serve food", example: "He ate a whole plate of rice." },
      { word: "slice", pronunciation: "/slaɪs/", meaning: "a thin flat piece cut from something larger", example: "Can I have a slice of chocolate cake?" },
      { word: "meatball", pronunciation: "/ˈmiːtbɔːl/", meaning: "a small round ball of minced meat, often eaten with pasta", example: "Spaghetti with meatballs is very popular in Italy." },
      { word: "cereal", pronunciation: "/ˈsɪəriəl/", meaning: "a food made from grains, usually eaten with milk for breakfast", example: "I have cereal with milk every morning." },
      { word: "butter", pronunciation: "/ˈbʌtə(r)/", meaning: "a soft yellow food made from cream, spread on bread", example: "She puts butter on her toast every morning." },
      { word: "cupcake", pronunciation: "/ˈkʌpkeɪk/", meaning: "a small cake baked in a cup-shaped mould, often decorated with icing", example: "My grandmother makes the best chocolate cupcakes." },
      { word: "spaghetti", pronunciation: "/spəˈɡeti/", meaning: "a type of long thin pasta from Italy", example: "Spaghetti with tomato sauce is my favourite dinner." },
      { word: "ingredient", pronunciation: "/ɪnˈɡriːdiənt/", meaning: "one of the things that is used to make a food or drink", example: "Sugar and butter are the main ingredients." },
      { word: "fresh", pronunciation: "/freʃ/", meaning: "recently made or picked; not old or preserved", example: "I love eating fresh fruit every morning." },
      { word: "healthy", pronunciation: "/ˈhelθi/", meaning: "good for your body; helping you to stay well", example: "Vegetables and fruit are very healthy foods." },
      { word: "snack", pronunciation: "/snæk/", meaning: "a small amount of food eaten between main meals", example: "I have a fruit snack at break time." },
      { word: "recipe", pronunciation: "/ˈresɪpi/", meaning: "a set of instructions for cooking a particular dish", example: "Can you give me the recipe for this cake?" },
      { word: "cook", pronunciation: "/kʊk/", meaning: "to prepare food by heating it", example: "My mother cooks delicious meals every day." },
      { word: "grilled", pronunciation: "/ɡrɪld/", meaning: "cooked on a metal frame over or under direct heat", example: "Grilled fish with lemon is delicious." },
      { word: "fried", pronunciation: "/fraɪd/", meaning: "cooked in hot oil or fat", example: "Fried rice is a very popular dish in Vietnam." },
      { word: "steamed", pronunciation: "/stiːmd/", meaning: "cooked using steam from boiling water, without frying or baking", example: "Steamed fish is healthy and delicious." },
      { word: "vegetable", pronunciation: "/ˈvedʒtəbl/", meaning: "a plant or part of a plant that is eaten as food", example: "Broccoli and cucumber are my favourite vegetables." },
      { word: "meal", pronunciation: "/miːl/", meaning: "an occasion when you eat food, such as breakfast, lunch or dinner", example: "We have three meals a day." },
      { word: "thirsty", pronunciation: "/ˈθɜːsti/", meaning: "feeling the need to drink something", example: "After playing sport, I am very thirsty." },
      { word: "hungry", pronunciation: "/ˈhʌŋɡri/", meaning: "feeling the need to eat food", example: "I am very hungry after school." },
      { word: "a lot of", pronunciation: "/ə lɒt ɒv/", meaning: "a large amount or number of something", example: "We have a lot of food for the party." },
      { word: "some", pronunciation: "/sʌm/", meaning: "an amount of something that is not specific or exact", example: "Would you like some cake?" },
      { word: "any", pronunciation: "/ˈeni/", meaning: "used in questions and negatives to mean 'some' or 'a certain amount'", example: "Do you have any oranges?" },
      { word: "piece", pronunciation: "/piːs/", meaning: "a portion of food cut or separated from a larger amount", example: "I would like a piece of chocolate, please." },
    ],
    grammar: [
      {
        id: "g1",
        type: "multiple_choice",
        question: "We have ___ milk in the fridge.",
        options: ["a lot of", "a", "an", "much"],
        answer: "a lot of",
        explanation: "a lot of dùng với danh từ không đếm được (milk)"
      },
      {
        id: "g2",
        type: "multiple_choice",
        question: "Do you have ___ oranges?",
        options: ["some", "any", "a lot", "much"],
        answer: "any",
        explanation: "Dùng 'any' trong câu hỏi và phủ định"
      },
      {
        id: "g3",
        type: "fill_blank",
        question: "I'd like ___ slice of cake, please.",
        answer: "a",
        hint: "a/an + singular noun"
      },
      {
        id: "g4",
        type: "fill_blank",
        question: "There is ___ water in the bottle.",
        answer: "some",
        hint: "Câu khẳng định với danh từ không đếm được"
      },
      { id: "g5", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["I", "don't", "have", "any", "pumpkins", "at", "home", "."], answer: "I don't have any pumpkins at home ." },
      { id: "g6", type: "multiple_choice", question: "We have ___ butter in the fridge.", options: ["some", "any", "a", "an"], answer: "some", explanation: "some = dùng trong câu khẳng định" },
      { id: "g7", type: "fill_blank", question: "Would you like ___ slice of chocolate cake?", answer: "a", hint: "a/an + danh từ số ít" },
      { id: "g8", type: "fill_blank", question: "She doesn't have ___ milk at home.", answer: "any", hint: "any = dùng trong câu phủ định" },
      { id: "g9", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["Would", "you", "like", "some", "crispy", "chicken", "?"], answer: "Would you like some crispy chicken ?" },
      { id: "g10", type: "multiple_choice", question: "I'd like ___ bowl of pho, please.", options: ["a", "an", "some", "any"], answer: "a", explanation: "a + danh từ bắt đầu bằng phụ âm" },
      { id: "g11", type: "fill_blank", question: "This food is really ___! I love it. (delicious)", answer: "delicious", hint: "Tính từ mô tả hương vị ngon" },
      { id: "g12", type: "multiple_choice", question: "Do you have ___ eggs? I want to make a cake.", options: ["some", "any", "a lot", "much"], answer: "any", explanation: "any = dùng trong câu hỏi" },
      { id: "g13", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["There", "is", "some", "fresh", "fruit", "in", "the", "bowl", "."], answer: "There is some fresh fruit in the bowl ." },
    ],
    dictation: [
      "This spaghetti is delicious and tasty!",
      "Do you have any oranges at home?",
      "I would like a bowl of pho, please.",
      "Vietnamese food is often spicy but always delicious.",
      "We have a lot of vegetables in the kitchen.",
      "Would you like some crispy fried chicken?",
      "She doesn't have any butter at home.",
      "I would like a slice of chocolate cake, please.",
      "There is some fresh fruit in the bowl.",
      "Do you have any eggs for the recipe?",
      "This grilled fish is really healthy and delicious.",
      "My grandmother makes the best homemade cupcakes.",
      "Vietnamese pho is not too salty and not too sweet.",
    ],
    writing: {
      title: "My Favourite Food",
      template: `My favourite food is [food name].
It is [taste adjectives: sweet/salty/spicy/sour].
I usually eat it [when/where].
To make it, you need [ingredients].
I love it because it is [reason].`,
      prompts: [
        "Mô tả món ăn yêu thích dùng: delicious, crispy, salty, sour, spicy, sweet",
        "Viết về bữa ăn sáng/trưa/tối dùng a/an, some, any",
        "So sánh 2 món ăn dùng but: Vietnamese food is spicy, but...",
      ]
    },
    speaking: [
      "Describe your favourite Vietnamese dish! What does it taste like? (30 seconds)",
      "Tell me what you had for breakfast/lunch today! (30 seconds)",
      "Do you like spicy food? Why or why not? (30 seconds)",
    ],
    reading: {
      title: "Food Around the World",
      passage: `Food is very important in every culture. Different countries have different delicious foods!

In Vietnam, pho is a very popular dish. It is a bowl of noodle soup with meat and vegetables. The soup is tasty and a little bit spicy. Many people eat pho for breakfast. It is not too salty and not too sweet. It is just delicious!

In Italy, people love spaghetti with meatballs. The sauce is sweet and a little bit sour. It is crispy on top and soft inside. Italians eat it with a slice of bread and butter.

In Mexico, people eat spicy food. They love chilli and tacos. The food is very spicy but very tasty! They also eat sour cream with their meals.

My favourite food is my grandmother's homemade cupcakes. She uses butter, chocolate, and sugar. They are sweet and soft. I love eating a big slice of chocolate cake after dinner. There is never any cake left!`,
      questions: [
        { type: "multiple_choice", question: "What is pho?", options: ["A rice dish", "A noodle soup", "A fried food", "A sweet cake"], answer: "A noodle soup" },
        { type: "true_false", question: "Pho is very salty and very sweet.", answer: false },
        { type: "multiple_choice", question: "What do Italians eat spaghetti with?", options: ["Rice", "A slice of bread and butter", "Soup", "Cupcakes"], answer: "A slice of bread and butter" },
        { type: "true_false", question: "Mexican food is often spicy.", answer: true },
        { type: "multiple_choice", question: "What does the writer's grandmother use to make cupcakes?", options: ["Sugar and fruit", "Butter, chocolate and sugar", "Flour and cream", "Eggs and honey"], answer: "Butter, chocolate and sugar" },
        { type: "short_answer", question: "What taste word describes Mexican food? (one word)", answer: "spicy" },
      ]
    },
    listenFill: [
      { audio: "This spaghetti is delicious and tasty.", display: "This spaghetti is ___ and tasty.", answers: ["delicious"] },
      { audio: "Do you have any oranges at home?", display: "Do you have ___ oranges at home?", answers: ["any"] },
      { audio: "I would like a bowl of pho, please.", display: "I would like a ___ of pho, please.", answers: ["bowl"] },
      { audio: "Vietnamese food is often spicy but always delicious.", display: "Vietnamese food is often ___ but always delicious.", answers: ["spicy"] },
      { audio: "We have a lot of vegetables in the kitchen.", display: "We have a lot of ___ in the kitchen.", answers: ["vegetables"] },
      { audio: "I don't have any pumpkins at home.", display: "I don't have ___ pumpkins at home.", answers: ["any"] },
      { audio: "She made a big plate of crispy chicken.", display: "She made a big plate of ___ chicken.", answers: ["crispy"] },
      { audio: "Would you like some crispy chicken?", display: "Would you like ___ crispy chicken?", answers: ["some"] },
      { audio: "There is some fresh fruit in the bowl.", display: "There is some fresh ___ in the bowl.", answers: ["fruit"] },
      { audio: "I would like a slice of chocolate cake.", display: "I would like a ___ of chocolate cake.", answers: ["slice"] },
      { audio: "This grilled fish is really healthy.", display: "This ___ fish is really healthy.", answers: ["grilled"] },
      { audio: "She doesn't have any butter at home.", display: "She doesn't have any ___ at home.", answers: ["butter"] },
      { audio: "Vietnamese pho is not too salty and not too sweet.", display: "Vietnamese pho is not too salty and not too ___.", answers: ["sweet"] },
      { audio: "I love steamed rice with vegetables.", display: "I love ___ rice with vegetables.", answers: ["steamed"] },
      { audio: "Do you have any eggs for the recipe?", display: "Do you have any eggs for the ___?", answers: ["recipe"] },
      { audio: "My grandmother makes the best homemade cupcakes.", display: "My grandmother makes the best homemade ___.", answers: ["cupcakes"] },
      { audio: "I have cereal with milk every morning.", display: "I have ___ with milk every morning.", answers: ["cereal"] },
      { audio: "The food is a little bit sour but very tasty.", display: "The food is a little bit ___ but very tasty.", answers: ["sour"] },
      { audio: "He ordered a big bowl of noodles.", display: "He ordered a big ___ of noodles.", answers: ["bowl"] },
      { audio: "We eat three healthy meals a day.", display: "We eat three ___ meals a day.", answers: ["healthy"] },
    ],
    pronunciation: {
      focus: "Food adjectives stress",
      words: ["de-LI-cious", "fan-TAS-tic", "de-LIGHT-ful"],
      chant: ""
    },
    review: {
      errorCorrection: [
        { wrong: "My mum often buy a few bananas.", display: "My mum often ___ a few bananas.", answer: "buys", hint: "My mum (số ít) → buys" },
        { wrong: "I often buy a few cheese for my sandwich.", display: "I often buy ___ cheese for my sandwich.", answer: "a little", hint: "Cheese là danh từ không đếm được → a little" },
        { wrong: "We've got a little tomatoes.", display: "We've got ___ tomatoes.", answer: "a few", hint: "Tomatoes là danh từ đếm được → a few" },
        { wrong: "I want a few milk in my coffee.", display: "I want ___ milk in my coffee.", answer: "a little", hint: "Milk là danh từ không đếm được → a little" },
        { wrong: "There are a few rice for me.", display: "There is ___ rice for me.", answer: "a little", hint: "Rice là danh từ không đếm được → a little" },
        { wrong: "We need a few butter for the cake.", display: "We need ___ butter for the cake.", answer: "a little", hint: "Butter là danh từ không đếm được → a little" },
        { wrong: "He drink a few juice with his lunch.", display: "He ___ a little juice with his lunch.", answer: "drinks", hint: "He → drinks (số ít)" },
        { wrong: "There is some apple on the table.", display: "There ___ some apples on the table.", answer: "are", hint: "Apples (số nhiều) → are" },
      ],
      oddOneOut: [
        { words: ["Banana", "Apple", "Grape", "Chocolate"], answer: "Chocolate", reason: "Chocolate không phải trái cây, còn lại đều là loại quả" },
        { words: ["Potato", "Hamburger", "Carrot", "Tomato"], answer: "Hamburger", reason: "Hamburger là đồ ăn nhanh, còn lại đều là rau củ" },
        { words: ["Broccoli", "Spaghetti", "Pizza", "Bread"], answer: "Broccoli", reason: "Broccoli là rau, còn lại đều là món làm từ bột mì" },
        { words: ["Water", "Juice", "Milk", "Sour"], answer: "Sour", reason: "Sour là tính từ (vị chua), còn lại đều là đồ uống" },
        { words: ["Bowl", "Plate", "Cucumber", "Glass"], answer: "Cucumber", reason: "Cucumber là rau củ, còn lại đều là đồ dùng ăn uống" },
        { words: ["Sweet", "Sour", "Salty", "Bread"], answer: "Bread", reason: "Bread là thức ăn (danh từ), còn lại đều là tính từ mô tả vị" },
      ],
    },
  },
  {
    id: 7,
    title: "Sports",
    color: "teal",
    icon: "⚽",
    vocabulary: [
      { word: "helmet", pronunciation: "/ˈhelmɪt/", meaning: "a hard hat that protects your head during sports or riding", example: "Always wear a helmet when you ride your bicycle." },
      { word: "race", pronunciation: "/reɪs/", meaning: "a competition to see who can run, drive or swim the fastest", example: "She won the bike race last Saturday." },
      { word: "jump", pronunciation: "/dʒʌmp/", meaning: "to push yourself up into the air by using your legs", example: "He can jump very high on his bicycle." },
      { word: "win", pronunciation: "/wɪn/", meaning: "to finish first in a competition; to be the best", example: "We may not win, but we can still have fun." },
      { word: "fast", pronunciation: "/fɑːst/", meaning: "moving or happening quickly; not slow", example: "Many racers are very fast." },
      { word: "competition", pronunciation: "/ˌkɒmpəˈtɪʃn/", meaning: "an organised event where people try to win by being the best", example: "There is a big cycling competition next month." },
      { word: "kick", pronunciation: "/kɪk/", meaning: "to hit something with your foot", example: "You must kick the ball in football." },
      { word: "control", pronunciation: "/kənˈtrəʊl/", meaning: "to direct or manage something; to keep power over it", example: "You need to control your movements in martial arts." },
      { word: "movement", pronunciation: "/ˈmuːvmənt/", meaning: "the action of moving; a change of position", example: "Kung Fu has many beautiful movements." },
      { word: "once", pronunciation: "/wʌns/", meaning: "one time only", example: "I go swimming once a week." },
      { word: "twice", pronunciation: "/twaɪs/", meaning: "two times", example: "She swims twice a week for exercise." },
      { word: "three times", pronunciation: "/θriː taɪmz/", meaning: "happening on three separate occasions", example: "He trains three times a week." },
      { word: "four times", pronunciation: "/fɔː taɪmz/", meaning: "happening on four separate occasions", example: "She practises yoga four times a week." },
      { word: "should", pronunciation: "/ʃʊd/", meaning: "used to give advice or say what is the right thing to do", example: "Children should learn to play a sport." },
      { word: "shouldn't", pronunciation: "/ˈʃʊdnt/", meaning: "should not; used to advise against doing something", example: "Children shouldn't watch TV for many hours a day." },
      { word: "must", pronunciation: "/mʌst/", meaning: "used to say that something is necessary or required", example: "You must wear a helmet when cycling." },
      { word: "mustn't", pronunciation: "/ˈmʌsnt/", meaning: "must not; used to say something is forbidden", example: "You mustn't touch the ball with your hands in football." },
      { word: "score", pronunciation: "/skɔː(r)/", meaning: "the number of points or goals each team has in a game", example: "The score was 2-1 at the end of the match." },
      { word: "team", pronunciation: "/tiːm/", meaning: "a group of people who play a sport together", example: "Our school team won the football match." },
      { word: "player", pronunciation: "/ˈpleɪə(r)/", meaning: "a person who takes part in a game or sport", example: "She is the best player on the team." },
      { word: "train", pronunciation: "/treɪn/", meaning: "to practise and prepare for a sport or skill", example: "He trains hard every day to get better." },
      { word: "champion", pronunciation: "/ˈtʃæmpiən/", meaning: "the winner of a competition; the best in a sport", example: "She became the national swimming champion." },
      { word: "trophy", pronunciation: "/ˈtrəʊfi/", meaning: "a cup or award given to the winner of a competition", example: "They won a big golden trophy at the race." },
      { word: "match", pronunciation: "/mætʃ/", meaning: "a game between two teams or players", example: "We watched an exciting football match last night." },
      { word: "energy", pronunciation: "/ˈenədʒi/", meaning: "the ability and strength to be active and do things", example: "Playing sport gives you a lot of energy." },
      { word: "strength", pronunciation: "/streŋθ/", meaning: "the quality of being physically powerful; how strong you are", example: "Swimming builds strength in your arms and legs." },
      { word: "skill", pronunciation: "/skɪl/", meaning: "the ability to do something well, usually after practice", example: "Cycling takes skill and balance." },
      { word: "lose", pronunciation: "/luːz/", meaning: "to fail to win a game or competition", example: "It's okay to lose sometimes. You can learn from it." },
      { word: "mind", pronunciation: "/maɪnd/", meaning: "the part of you that thinks, feels and remembers", example: "Sport is good for both your body and your mind." },
      { word: "fight", pronunciation: "/faɪt/", meaning: "to use physical force against someone, or to compete strongly", example: "In martial arts, you learn to fight responsibly." },
      { word: "ice-dancer", pronunciation: "/ˈaɪs dɑːnsə(r)/", meaning: "a person who performs artistic dancing on ice", example: "The ice-dancer moved gracefully across the rink." },
      { word: "prepare", pronunciation: "/prɪˈpeə(r)/", meaning: "to get ready for something that is going to happen", example: "You should prepare well before a race." },
    ],
    grammar: [
      {
        id: "g1",
        type: "multiple_choice",
        question: "Anita ___ fun with her new helmet at present.",
        options: ["is having", "has", "have", "having"],
        answer: "is having",
        explanation: "Present continuous: am/is/are + V-ing (đang xảy ra lúc nói)"
      },
      {
        id: "g2",
        type: "multiple_choice",
        question: "Children ___ learn to play a sport.",
        options: ["should", "shouldn't", "must", "mustn't"],
        answer: "should",
        explanation: "should = nên (lời khuyên tích cực)"
      },
      {
        id: "g3",
        type: "fill_blank",
        question: "Children ___ watch TV many hours a day.",
        answer: "shouldn't",
        hint: "Lời khuyên phủ định"
      },
      {
        id: "g4",
        type: "fill_blank",
        question: "I ride my bike ___ a week. (2 lần)",
        answer: "twice",
        hint: "once, ___, three times, four times"
      },
      {
        id: "g5",
        type: "reorder",
        question: "Sắp xếp thành câu đúng:",
        words: ["You", "must", "kick", "the", "ball", "."],
        answer: "You must kick the ball ."
      },
      { id: "g6", type: "multiple_choice", question: "You ___ touch the ball with your hands! (It's not allowed)", options: ["must", "mustn't", "should", "shouldn't"], answer: "mustn't", explanation: "mustn't = tuyệt đối không được" },
      { id: "g7", type: "fill_blank", question: "I go swimming ___ a week. (3 lần)", answer: "three times", hint: "once, twice, ___ times" },
      { id: "g8", type: "multiple_choice", question: "She ___ eat vegetables every day. (It's good advice)", options: ["must", "mustn't", "should", "shouldn't"], answer: "should", explanation: "should = nên (lời khuyên)" },
      { id: "g9", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["You", "should", "wear", "a", "helmet", "when", "cycling", "."], answer: "You should wear a helmet when cycling ." },
      { id: "g10", type: "fill_blank", question: "Ahmed ___ (practise) jumps at the moment.", answer: "is practising", hint: "Present continuous: is/am/are + V-ing" },
      { id: "g11", type: "multiple_choice", question: "I ride my bike ___ a week. (once)", options: ["one", "once", "first", "one time"], answer: "once", explanation: "once = một lần" },
      { id: "g12", type: "fill_blank", question: "Children ___ watch too much TV. It is bad for their eyes.", answer: "shouldn't", hint: "Lời khuyên phủ định" },
      { id: "g13", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["She", "is", "winning", "the", "race", "at", "the", "moment", "."], answer: "She is winning the race at the moment ." },
    ],
    dictation: [
      "Children should learn to play a sport.",
      "You must kick the ball. You mustn't touch it with your hands.",
      "I ride my bike twice a week.",
      "Anita is having fun with her new helmet at present.",
      "You should wear a helmet when you ride your bicycle.",
      "She goes swimming three times a week.",
      "Children shouldn't watch too much TV every day.",
      "Ahmed is practising jumps at the moment.",
      "You mustn't touch the ball with your hands in football.",
      "He trains hard once a week at the sports centre.",
      "We may not win, but we can still have fun.",
      "The race is very exciting and very fast.",
      "She should prepare well before the competition.",
    ],
    writing: {
      title: "My Favourite Sport",
      template: `My favourite sport is [sport].
I play it [once/twice/three times] a week.
To play [sport], you must [rule].
You mustn't [rule].
I think children should [reason].
[Sport] is [adjective] because [reason].`,
      prompts: [
        "Viết luật chơi của môn thể thao yêu thích dùng must/mustn't",
        "Dùng should/shouldn't đưa ra lời khuyên về thói quen thể dục",
        "Mô tả hoạt động đang diễn ra dùng present continuous",
        "Viết về lịch tập luyện dùng once/twice/three times a week",
      ]
    },
    speaking: [
      "What sport do you play? How often? Use once/twice a week! (30 seconds)",
      "Tell me the rules of your favourite sport! Use must and mustn't! (30 seconds)",
      "Should children play sports? Give 3 reasons! (45 seconds)",
    ],
    reading: {
      title: "The Our Town Bike Race",
      passage: `Ahmed and Nur are best friends. They both love cycling. Every Saturday, they ride their bikes together in the park.

One day, Ahmed read about the Our Town Bike Race. "Let's enter the race together!" he said.

"You are joking!" said Nur. "Many racers are very fast. They jump, too! I don't think I am good enough."

"I am taking lessons," said Ahmed. "We are practising jumps at the moment. You can join us."

Nur thought about it. "Maybe I need a better helmet first."

"Are you scared, Nur?" asked Ahmed.

"Me? No way! I just don't want to come in last."

Ahmed laughed. "We may not win the race, but we can still have fun! Children should learn to play a sport. It is good for the mind and body."

On race day, both Ahmed and Nur wore their helmets and rode as fast as they could. They did not win first place, but they finished the race. The crowd cheered loudly. They were so happy!

"We should do this again next year!" said Nur. Ahmed smiled. "I knew you could do it!"`,
      questions: [
        { type: "multiple_choice", question: "When do Ahmed and Nur ride their bikes together?", options: ["Every day", "Every Saturday", "Every Sunday", "Every Friday"], answer: "Every Saturday" },
        { type: "true_false", question: "Nur was very confident about entering the race at first.", answer: false },
        { type: "multiple_choice", question: "What is Ahmed practising at the moment?", options: ["Racing", "Jumps", "Swimming", "Kicking"], answer: "Jumps" },
        { type: "true_false", question: "Ahmed and Nur won first place in the race.", answer: false },
        { type: "multiple_choice", question: "What does Ahmed say children should do?", options: ["Study hard", "Learn to play a sport", "Win every race", "Buy good helmets"], answer: "Learn to play a sport" },
        { type: "short_answer", question: "What did Ahmed and Nur wear on race day? (one word)", answer: "helmets" },
      ]
    },
    listenFill: [
      { audio: "Children should learn to play a sport.", display: "Children ___ learn to play a sport.", answers: ["should"] },
      { audio: "You must kick the ball. You mustn't touch it with your hands.", display: "You must kick the ball. You ___ touch it with your hands.", answers: ["mustn't"] },
      { audio: "I ride my bike twice a week.", display: "I ride my bike ___ a week.", answers: ["twice"] },
      { audio: "Anita is having fun with her new helmet at present.", display: "Anita is having fun with her new ___ at present.", answers: ["helmet"] },
      { audio: "Children shouldn't watch TV many hours a day.", display: "Children ___ watch TV many hours a day.", answers: ["shouldn't"] },
      { audio: "She goes to the competition once a month.", display: "She goes to the competition ___ a month.", answers: ["once"] },
      { audio: "They are practising jumps at the moment.", display: "They are ___ jumps at the moment.", answers: ["practising"] },
      { audio: "You should wear a helmet when cycling.", display: "You should wear a ___ when cycling.", answers: ["helmet"] },
      { audio: "She goes swimming three times a week.", display: "She goes swimming ___ times a week.", answers: ["three"] },
      { audio: "Children shouldn't watch too much TV every day.", display: "Children ___ watch too much TV every day.", answers: ["shouldn't"] },
      { audio: "Ahmed is practising jumps at the moment.", display: "___ is practising jumps at the moment.", answers: ["Ahmed"] },
      { audio: "You must wear a helmet to protect your head.", display: "You must wear a helmet to ___ your head.", answers: ["protect"] },
      { audio: "She trains hard three times a week.", display: "She ___ hard three times a week.", answers: ["trains"] },
      { audio: "We may not win but we can have fun.", display: "We may not ___ but we can have fun.", answers: ["win"] },
      { audio: "The race is very exciting and fast.", display: "The ___ is very exciting and fast.", answers: ["race"] },
      { audio: "Children should play sports for their health.", display: "Children should play ___ for their health.", answers: ["sports"] },
      { audio: "He controls his bicycle very well.", display: "He ___ his bicycle very well.", answers: ["controls"] },
      { audio: "You mustn't kick other players in football.", display: "You mustn't ___ other players in football.", answers: ["kick"] },
      { audio: "She goes to the gym four times a week.", display: "She goes to the gym ___ times a week.", answers: ["four"] },
      { audio: "Sport is good for both the body and the mind.", display: "Sport is good for both the body and the ___.", answers: ["mind"] },
    ],
    pronunciation: {
      focus: "3-syllable stress",
      words: ["HEL-met", "pre-PARE", "com-pe-TI-tion"],
      chant: ""
    }
  },
  {
    id: 8,
    title: "People and Places",
    color: "indigo",
    icon: "🏠",
    vocabulary: [
      { word: "balcony", pronunciation: "/ˈbælkəni/", meaning: "a small platform outside a window or door, usually with a railing", example: "She drinks tea on the balcony every morning." },
      { word: "basement", pronunciation: "/ˈbeɪsmənt/", meaning: "the floor of a building that is below the ground level", example: "We park our car in the basement." },
      { word: "floor", pronunciation: "/flɔː(r)/", meaning: "a level of a building; a storey", example: "We live on the third floor of the apartment." },
      { word: "garden", pronunciation: "/ˈɡɑːdn/", meaning: "an area of land next to a house where plants, flowers or vegetables grow", example: "He grows tomatoes in his garden." },
      { word: "ladder", pronunciation: "/ˈlædə(r)/", meaning: "a piece of equipment with steps used for climbing up or down", example: "He climbs the ladder to get into the tree house." },
      { word: "view", pronunciation: "/vjuː/", meaning: "what you can see from a place, especially a beautiful natural scene", example: "There is a wonderful view of the mountains from here." },
      { word: "apartment", pronunciation: "/əˈpɑːtmənt/", meaning: "a set of rooms on one floor of a building where people live", example: "We live in a small apartment in the city." },
      { word: "tree house", pronunciation: "/ˈtriː haʊs/", meaning: "a small house or platform built high up in the branches of a tree", example: "The children love playing in their tree house." },
      { word: "fasten", pronunciation: "/ˈfɑːsn/", meaning: "to attach or close something firmly so it does not come loose", example: "Please fasten your seatbelt before the car moves." },
      { word: "float", pronunciation: "/fləʊt/", meaning: "to stay on the surface of water or air without sinking", example: "Hot-air balloons float up into the sky." },
      { word: "relax", pronunciation: "/rɪˈlæks/", meaning: "to rest and stop worrying; to become calm and comfortable", example: "I relax in the garden after school." },
      { word: "soap", pronunciation: "/səʊp/", meaning: "a substance used with water for washing and cleaning", example: "In space, astronauts have special soap that floats." },
      { word: "space", pronunciation: "/speɪs/", meaning: "the area beyond the Earth's atmosphere where stars and planets are", example: "Astronauts live in a space station above the Earth." },
      { word: "towel", pronunciation: "/ˈtaʊəl/", meaning: "a piece of cloth used for drying yourself after washing", example: "She wrapped herself in a warm towel after her shower." },
      { word: "because", pronunciation: "/bɪˈkɒz/", meaning: "for the reason that; used to give an explanation", example: "I don't like cities because they are very noisy." },
      { word: "would like", pronunciation: "/wʊd laɪk/", meaning: "a polite way of saying you want something", example: "Would you like to live in a tree house?" },
      { word: "city", pronunciation: "/ˈsɪti/", meaning: "a large and important town with many buildings and people", example: "Ho Chi Minh City is the biggest city in Vietnam." },
      { word: "countryside", pronunciation: "/ˈkʌntrisaɪd/", meaning: "land outside cities and towns, with fields, forests and villages", example: "She loves the peace and quiet of the countryside." },
      { word: "neighbour", pronunciation: "/ˈneɪbə(r)/", meaning: "a person who lives next to or near you", example: "Our neighbours are very friendly and helpful." },
      { word: "modern", pronunciation: "/ˈmɒdn/", meaning: "new, recent and using the latest styles or technology", example: "They live in a modern apartment with many facilities." },
      { word: "ancient", pronunciation: "/ˈeɪnʃənt/", meaning: "very old; belonging to a time long in the past", example: "Hoi An is famous for its ancient buildings." },
      { word: "crowded", pronunciation: "/ˈkraʊdɪd/", meaning: "filled with too many people or things; very busy", example: "The market is very crowded at the weekend." },
      { word: "peaceful", pronunciation: "/ˈpiːsfl/", meaning: "calm, quiet and free from disturbance or conflict", example: "The village is very peaceful and beautiful." },
      { word: "bridge", pronunciation: "/brɪdʒ/", meaning: "a structure built over a river or road so people can cross", example: "We walked across the old bridge to the island." },
      { word: "museum", pronunciation: "/mjuːˈziːəm/", meaning: "a building where important historical or artistic objects are kept and shown", example: "We visited the history museum last weekend." },
      { word: "hotel", pronunciation: "/həʊˈtel/", meaning: "a building where people pay to stay overnight when travelling", example: "We stayed at a hotel near the beach." },
      { word: "market", pronunciation: "/ˈmɑːkɪt/", meaning: "a place where people buy and sell food and goods", example: "Mum buys fresh vegetables at the market every morning." },
      { word: "street", pronunciation: "/striːt/", meaning: "a road in a city or town with buildings on one or both sides", example: "There is a beautiful lantern street in Hoi An." },
      { word: "famous", pronunciation: "/ˈfeɪməs/", meaning: "known and recognised by many people", example: "Ha Long Bay is a famous tourist destination." },
      { word: "football-shaped house", pronunciation: "/ˈfʊtbɔːl ʃeɪpt haʊs/", meaning: "an unusual house designed to look like a football", example: "The football-shaped house has a very round roof." },
    ],
    grammar: [
      {
        id: "g1",
        type: "multiple_choice",
        question: "Would you like to live in a tree house? — ___, I would!",
        options: ["Yes", "No", "Sure", "OK"],
        answer: "Yes",
        explanation: "Would you like...? → Yes, I would. / No, I wouldn't."
      },
      {
        id: "g2",
        type: "multiple_choice",
        question: "You ___ kick the ball. (It is a rule)",
        options: ["must", "mustn't", "should", "can"],
        answer: "must",
        explanation: "must = bắt buộc phải"
      },
      {
        id: "g3",
        type: "fill_blank",
        question: "It's Saturday, so we ___ go to the shops.",
        answer: "can",
        hint: "can = được phép"
      },
      {
        id: "g4",
        type: "fill_blank",
        question: "I don't like cities ___ they're noisy.",
        answer: "because",
        hint: "Giải thích lý do"
      },
      { id: "g5", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["Would", "you", "like", "to", "live", "in", "a", "tree", "house", "?"], answer: "Would you like to live in a tree house ?" },
      { id: "g6", type: "fill_blank", question: "She doesn't like the city ___ it is very crowded.", answer: "because", hint: "Giải thích lý do" },
      { id: "g7", type: "multiple_choice", question: "Would you like to live in the countryside? — ___, I wouldn't.", options: ["Yes", "No", "Sure", "Please"], answer: "No", explanation: "Would you...? → No, I wouldn't." },
      { id: "g8", type: "fill_blank", question: "It is Friday, so we ___ go swimming.", answer: "can", hint: "can = được phép" },
      { id: "g9", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["I", "like", "the", "countryside", "because", "it", "is", "peaceful", "."], answer: "I like the countryside because it is peaceful ." },
      { id: "g10", type: "multiple_choice", question: "In the tree house, everything ___ fastened down.", options: ["must be", "mustn't", "can", "couldn't"], answer: "must be", explanation: "must be = phải được (bị động)" },
      { id: "g11", type: "fill_blank", question: "___ you like to try a tree house for one night?", answer: "Would", hint: "Câu hỏi lịch sự" },
      { id: "g12", type: "multiple_choice", question: "I love this apartment ___ it has a beautiful view.", options: ["but", "because", "so", "and"], answer: "because", explanation: "because = bởi vì (giải thích lý do)" },
      { id: "g13", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["You", "can", "see", "the", "mountains", "from", "the", "balcony", "."], answer: "You can see the mountains from the balcony ." },
    ],
    dictation: [
      "I don't like cities because they are noisy!",
      "Would you like to live in a tree house?",
      "You must fasten your seatbelt.",
      "It's Saturday, so we can go to the shops.",
      "I like the countryside because it is peaceful.",
      "Would you like to live on the third floor?",
      "You can see the mountains from the balcony.",
      "She doesn't like cities because they are crowded.",
      "In a tree house, you must fasten everything down.",
      "It is Friday, so we can go to the cinema.",
      "He would like to live near the sea.",
      "The view from the balcony is beautiful.",
      "I wouldn't like to live in a basement.",
    ],
    writing: {
      title: "My Dream Home",
      template: `My dream home is a [type of home].
It has [number] floors/rooms.
I love it because [reason].
From the [balcony/window], you can see [view].
I would like to [activity] there.
I would [not] like to live in [place] because [reason].`,
      prompts: [
        "Mô tả ngôi nhà mơ ước dùng Would you like to...?",
        "Giải thích lý do thích/không thích nơi ở dùng because",
        "Viết quy tắc ở nhà dùng must/mustn't/can",
      ]
    },
    speaking: [
      "Describe your home! How many floors? What can you see from the window? (45 seconds)",
      "Would you like to live in a tree house or an apartment? Why? (30 seconds)",
      "What are the rules in your home? Use must and mustn't! (30 seconds)",
    ],
    reading: {
      title: "Amazing Houses Around the World",
      passage: `People live in many different kinds of homes around the world. Some homes are very unusual!

In some cities, people live in tall apartment buildings. Apartments usually have a balcony where you can sit and enjoy the view. Some apartments have a basement for cars and storage.

In New Zealand, there is a house shaped like a football! It has a round roof and big windows. The view from the top floor is amazing. Would you like to live there?

In Canada, some people live in tree houses. A tree house is a home built high up in a tree. You use a ladder to climb up. It can relax you to sleep among the trees. However, you must fasten everything so things don't fall!

In space, astronauts float in the space station. They must fasten their food and their tools. They can relax by looking at the Earth from the window. I don't like cities because they are noisy, but I think living in space would be very exciting!

I would like to live in a tree house because I love nature. Would you like to live in an unusual home?`,
      questions: [
        { type: "multiple_choice", question: "What do apartments usually have to enjoy the view?", options: ["A basement", "A ladder", "A balcony", "A garden"], answer: "A balcony" },
        { type: "true_false", question: "The football-shaped house is in Australia.", answer: false },
        { type: "multiple_choice", question: "How do you get into a tree house?", options: ["A lift", "A ladder", "Stairs", "A bridge"], answer: "A ladder" },
        { type: "true_false", question: "In space, astronauts must fasten their food and tools.", answer: true },
        { type: "multiple_choice", question: "Why does the writer not like cities?", options: ["They are dangerous", "They are expensive", "They are noisy", "They are boring"], answer: "They are noisy" },
        { type: "short_answer", question: "What kind of house does the writer want to live in? (two words)", answer: "tree house" },
      ]
    },
    listenFill: [
      { audio: "I don't like cities because they are noisy.", display: "I don't like cities ___ they are noisy.", answers: ["because"] },
      { audio: "Would you like to live in a tree house?", display: "___ you like to live in a tree house?", answers: ["Would"] },
      { audio: "You must fasten your seatbelt.", display: "You must ___ your seatbelt.", answers: ["fasten"] },
      { audio: "It is Saturday, so we can go to the shops.", display: "It is Saturday, so we ___ go to the shops.", answers: ["can"] },
      { audio: "The balloon floats high in the sky.", display: "The balloon ___ high in the sky.", answers: ["floats"] },
      { audio: "You mustn't touch the ball with your hands.", display: "You ___ touch the ball with your hands.", answers: ["mustn't"] },
      { audio: "There is a beautiful view from the balcony.", display: "There is a beautiful ___ from the balcony.", answers: ["view"] },
      { audio: "I like the countryside because it is peaceful.", display: "I like the countryside because it is ___.", answers: ["peaceful"] },
      { audio: "She doesn't like cities because they are crowded.", display: "She doesn't like cities because they are ___.", answers: ["crowded"] },
      { audio: "Would you like to live on the third floor?", display: "Would you like to live on the ___ floor?", answers: ["third"] },
      { audio: "You can see the mountains from the balcony.", display: "You can see the mountains from the ___.", answers: ["balcony"] },
      { audio: "In a tree house, you must fasten everything down.", display: "In a tree house, you must ___ everything down.", answers: ["fasten"] },
      { audio: "It is Friday so we can go to the cinema.", display: "It is Friday so we ___ go to the cinema.", answers: ["can"] },
      { audio: "He would like to live near the sea.", display: "He would like to live near the ___.", answers: ["sea"] },
      { audio: "Astronauts float in the space station.", display: "Astronauts ___ in the space station.", answers: ["float"] },
      { audio: "I love this apartment because it has a big garden.", display: "I love this apartment ___ it has a big garden.", answers: ["because"] },
      { audio: "She climbs the ladder to get into the tree house.", display: "She climbs the ___ to get into the tree house.", answers: ["ladder"] },
      { audio: "We live in a modern apartment in the city.", display: "We live in a ___ apartment in the city.", answers: ["modern"] },
      { audio: "The ancient town is very famous and beautiful.", display: "The ___ town is very famous and beautiful.", answers: ["ancient"] },
      { audio: "Would you like to live in a space station?", display: "Would you like to live in a ___ station?", answers: ["space"] },
    ],
    pronunciation: {
      focus: "Rhythm in sentences",
      words: ["I go to the CI-ne-ma on FRI-days"],
      chant: ""
    }
  },
  {
    id: 9,
    title: "Holidays and Travel",
    color: "cyan",
    icon: "✈️",
    vocabulary: [
      { word: "bridge", pronunciation: "/brɪdʒ/", meaning: "a structure built over a river or road that people can cross", example: "We walked across the famous Japanese Covered Bridge." },
      { word: "canal", pronunciation: "/kəˈnæl/", meaning: "a man-made waterway dug for boats or to supply water", example: "There are many canals in Amsterdam and Venice." },
      { word: "villager", pronunciation: "/ˈvɪlɪdʒə(r)/", meaning: "a person who lives in a village", example: "The friendly villagers welcomed us warmly." },
      { word: "flight", pronunciation: "/flaɪt/", meaning: "a journey made by plane", example: "The flight from Hanoi to Da Nang is one hour." },
      { word: "hot-air balloon", pronunciation: "/ˌhɒt ˈeə bəˈluːn/", meaning: "a large balloon filled with hot air that can carry people through the sky", example: "She wants to ride a hot-air balloon over the fields." },
      { word: "inventor", pronunciation: "/ɪnˈventə(r)/", meaning: "a person who designs and creates something completely new", example: "The inventor of the hot-air balloon lived in France." },
      { word: "silk", pronunciation: "/sɪlk/", meaning: "a smooth, soft and shiny fabric made from the threads of silkworms", example: "Vietnam is famous for producing beautiful silk." },
      { word: "smoke", pronunciation: "/sməʊk/", meaning: "the grey or black gas produced when something burns", example: "There was a lot of smoke coming from the old chimney." },
      { word: "passport", pronunciation: "/ˈpɑːspɔːt/", meaning: "an official document you need when travelling to another country", example: "Don't forget your passport when you travel abroad." },
      { word: "luggage", pronunciation: "/ˈlʌɡɪdʒ/", meaning: "bags and suitcases that you take when you travel", example: "She packed her luggage the night before the trip." },
      { word: "souvenir", pronunciation: "/ˌsuːvəˈnɪə(r)/", meaning: "something you buy to remember a place you have visited", example: "I bought a silk souvenir from Hoi An." },
      { word: "journey", pronunciation: "/ˈdʒɜːni/", meaning: "a trip from one place to another, especially a long one", example: "The journey by train takes three hours." },
      { word: "adventure", pronunciation: "/ədˈventʃə(r)/", meaning: "an exciting and unusual experience, often involving some risk", example: "Travelling to a new country is a great adventure." },
      { word: "explore", pronunciation: "/ɪkˈsplɔː(r)/", meaning: "to travel around an unfamiliar place to discover it", example: "We explored every street in the ancient town." },
      { word: "culture", pronunciation: "/ˈkʌltʃə(r)/", meaning: "the art, traditions and way of life of a group of people", example: "Hoi An has a very rich and beautiful culture." },
      { word: "traditional", pronunciation: "/trəˈdɪʃənl/", meaning: "following customs and practices that have existed for a long time", example: "We watched a traditional silk-making demonstration." },
      { word: "memorable", pronunciation: "/ˈmemərəbl/", meaning: "special or important enough to be remembered easily", example: "It was a truly memorable holiday." },
      { word: "waterfall", pronunciation: "/ˈwɔːtəfɔːl/", meaning: "a stream of water that falls down from a high place", example: "We hiked to a beautiful waterfall in the forest." },
      { word: "ancient", pronunciation: "/ˈeɪnʃənt/", meaning: "very old; from a time long ago in history", example: "The ancient town of Hoi An is very beautiful." },
      { word: "discover", pronunciation: "/dɪˈskʌvə(r)/", meaning: "to find or learn about something for the first time", example: "We discovered many interesting places on our holiday." },
      { word: "watched", pronunciation: "/wɒtʃt/", meaning: "past tense of 'watch'; looked at something for a period of time", example: "My family watched an interesting TV show last night." },
      { word: "wanted", pronunciation: "/ˈwɒntɪd/", meaning: "past tense of 'want'; had a wish or desire for something", example: "When I was a child, I wanted to fly." },
      { word: "visited", pronunciation: "/ˈvɪzɪtɪd/", meaning: "past tense of 'visit'; went to see a place or person", example: "We visited the ancient town on our first day." },
      { word: "stayed", pronunciation: "/steɪd/", meaning: "past tense of 'stay'; remained in a place for a time", example: "We stayed at a hotel near the river." },
      { word: "slept", pronunciation: "/slept/", meaning: "past tense of 'sleep'; rested with your eyes closed", example: "Last night, my family slept in a beautiful hotel." },
      { word: "took", pronunciation: "/tʊk/", meaning: "past tense of 'take'; carried something or made a journey", example: "We took many photos of the lanterns." },
      { word: "bought", pronunciation: "/bɔːt/", meaning: "past tense of 'buy'; paid money for something", example: "She bought beautiful silk scarves as souvenirs." },
      { word: "lock", pronunciation: "/lɒk/", meaning: "a device used to fasten a door, gate or container", example: "There are many locks on the old canal bridges." },
      { word: "crime", pronunciation: "/kraɪm/", meaning: "an action that is against the law; illegal activity", example: "In mystery stories, a detective solves a crime." },
      { word: "beach", pronunciation: "/biːtʃ/", meaning: "an area of sand or small stones next to the sea", example: "We spent three days relaxing on the beach." },
    ],
    grammar: [
      {
        id: "g1",
        type: "multiple_choice",
        question: "My family ___ an interesting TV show last night.",
        options: ["watch", "watches", "watched", "watching"],
        answer: "watched",
        explanation: "Past simple: watch → watched (quá khứ có quy tắc)"
      },
      {
        id: "g2",
        type: "multiple_choice",
        question: "What did you do yesterday? — I ___ the piano.",
        options: ["play", "plays", "played", "playing"],
        answer: "played",
        explanation: "Past simple: play → played"
      },
      {
        id: "g3",
        type: "fill_blank",
        question: "Last night, my family ___ in a hotel. (sleep)",
        answer: "slept",
        hint: "sleep → ___ (bất quy tắc)"
      },
      {
        id: "g4",
        type: "fill_blank",
        question: "When I was a child, I ___ to go on a balloon ride. (want)",
        answer: "wanted",
        hint: "want → ___ + -ed"
      },
      { id: "g5", type: "multiple_choice", question: "The verb 'looked' ends with the /___ / sound.", options: ["/t/", "/d/", "/ɪd/", "/əd/"], answer: "/t/", explanation: "look → looked /lʊkt/ — âm cuối là /t/ vì âm k không có tiếng" },
      { id: "g6", type: "fill_blank", question: "She ___ (buy) beautiful silk scarves as souvenirs.", answer: "bought", hint: "buy → ___ (bất quy tắc)" },
      { id: "g7", type: "multiple_choice", question: "Last weekend, we ___ the Ancient Town.", options: ["visit", "visits", "visited", "visiting"], answer: "visited", explanation: "Past simple: visit → visited (quy tắc)" },
      { id: "g8", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["We", "took", "many", "photos", "of", "the", "lanterns", "."], answer: "We took many photos of the lanterns ." },
      { id: "g9", type: "fill_blank", question: "We ___ (stay) at a hotel near the canal for three days.", answer: "stayed", hint: "stay + -ed" },
      { id: "g10", type: "multiple_choice", question: "What did they do on holiday? — They ___ a silk factory.", options: ["visit", "visits", "visited", "visiting"], answer: "visited", explanation: "Quá khứ của visit = visited" },
      { id: "g11", type: "fill_blank", question: "The verb 'visited' ends with the /___/ sound.", answer: "/ɪd/", hint: "visit → /ɪd/ vì âm t trước đó" },
      { id: "g12", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["She", "bought", "a", "beautiful", "silk", "scarf", "for", "her", "mother", "."], answer: "She bought a beautiful silk scarf for her mother ." },
      { id: "g13", type: "fill_blank", question: "Last night, my family ___ (sleep) very well after the long journey.", answer: "slept", hint: "sleep → ___ (bất quy tắc)" },
    ],
    dictation: [
      "My family watched an interesting TV show last night.",
      "When I was a child, I wanted to go on a hot-air balloon ride.",
      "What did you do yesterday?",
      "Last night, my family slept in a beautiful hotel.",
      "We visited the ancient town on the first day.",
      "She bought beautiful silk scarves as souvenirs.",
      "We took many photos of the colourful lanterns.",
      "The flight from Hanoi to Da Nang was one hour long.",
      "We stayed at a hotel near the canal for three nights.",
      "He walked across the famous old bridge.",
      "The villagers were very friendly and welcoming.",
      "I wanted to go back to Hoi An the next day.",
      "She watched a traditional silk-making demonstration.",
    ],
    writing: {
      title: "My Holiday",
      template: `Last [holiday], I went to [place].
I travelled by [transport].
I stayed at [accommodation] for [number] days.
I visited [place] and [place].
I [verb-ed] [activity] and [verb-ed] [activity].
My favourite memory was [memory].`,
      prompts: [
        "Kể về kỳ nghỉ gần nhất dùng quá khứ đơn (went, visited, stayed, ate...)",
        "Viết về ước mơ đến một nơi dùng When I was a child, I wanted to...",
        "Kể lại một ngày trong kỳ nghỉ theo trình tự: first, then, after that, finally",
      ]
    },
    speaking: [
      "Tell me about your last holiday! Where did you go? What did you do? (45 seconds)",
      "Describe your dream holiday destination! (30 seconds)",
      "Have you ever been on a plane? Tell me about it! (30 seconds)",
    ],
    reading: {
      title: "A Holiday in Hoi An",
      passage: `Last summer, my family went on a wonderful holiday to Hoi An, Vietnam. We travelled by plane and then by car. The flight was one hour long.

We stayed at a beautiful hotel near the canal. On the first day, we visited the famous Ancient Town. We walked across an old bridge and took many photos. The villagers were very friendly and welcoming.

On the second day, we went on a boat along the canal. We saw many colourful lanterns hanging above the water. It was so beautiful! My sister wanted to go on a hot-air balloon ride, but we didn't have time.

On the last day, we visited a silk factory. The inventor of the silk-making machine lived in this town long ago. We watched how workers made silk clothes. We bought some beautiful silk scarves for our family.

When we came home, my mum cooked a delicious meal and we watched an interesting TV show about Hoi An. We slept very well that night. I wanted to go back to Hoi An the next day! It was the best holiday ever.`,
      questions: [
        { type: "multiple_choice", question: "How did the family travel to Hoi An?", options: ["By train then bus", "By plane then car", "By boat then bicycle", "By car only"], answer: "By plane then car" },
        { type: "true_false", question: "The family stayed at a hotel near the canal.", answer: true },
        { type: "multiple_choice", question: "What did they see hanging above the water on the canal?", options: ["Silk scarves", "Colourful lanterns", "Hot-air balloons", "Old bridges"], answer: "Colourful lanterns" },
        { type: "true_false", question: "The family went on a hot-air balloon ride.", answer: false },
        { type: "multiple_choice", question: "What did they buy at the silk factory?", options: ["Lanterns", "Scarves", "Balloons", "Photos"], answer: "Scarves" },
        { type: "short_answer", question: "What did the family watch on TV that night? (two words)", answer: "TV show" },
      ]
    },
    listenFill: [
      { audio: "My family watched an interesting TV show last night.", display: "My family ___ an interesting TV show last night.", answers: ["watched"] },
      { audio: "What did you do yesterday?", display: "What did you ___ yesterday?", answers: ["do"] },
      { audio: "Last night, my family slept in a hotel.", display: "Last night, my family ___ in a hotel.", answers: ["slept"] },
      { audio: "When I was a child, I wanted to go on a hot-air balloon ride.", display: "When I was a child, I ___ to go on a hot-air balloon ride.", answers: ["wanted"] },
      { audio: "We walked across the old bridge.", display: "We ___ across the old bridge.", answers: ["walked"] },
      { audio: "She visited a silk factory and bought some scarves.", display: "She ___ a silk factory and bought some scarves.", answers: ["visited"] },
      { audio: "The villagers were very friendly.", display: "The ___ were very friendly.", answers: ["villagers"] },
      { audio: "We took many photos of the colourful lanterns.", display: "We took many ___ of the colourful lanterns.", answers: ["photos"] },
      { audio: "She bought beautiful silk scarves as souvenirs.", display: "She bought beautiful silk ___ as souvenirs.", answers: ["scarves"] },
      { audio: "The flight from Hanoi to Da Nang was one hour long.", display: "The ___ from Hanoi to Da Nang was one hour long.", answers: ["flight"] },
      { audio: "We stayed at a hotel near the canal.", display: "We ___ at a hotel near the canal.", answers: ["stayed"] },
      { audio: "I wanted to explore every street in the ancient town.", display: "I wanted to ___ every street in the ancient town.", answers: ["explore"] },
      { audio: "She watched a traditional silk-making demonstration.", display: "She watched a ___ silk-making demonstration.", answers: ["traditional"] },
      { audio: "He walked across the famous covered bridge.", display: "He walked across the famous covered ___.", answers: ["bridge"] },
      { audio: "We discovered many interesting places on our holiday.", display: "We ___ many interesting places on our holiday.", answers: ["discovered"] },
      { audio: "The journey by train takes three hours.", display: "The ___ by train takes three hours.", answers: ["journey"] },
      { audio: "It was the best holiday ever.", display: "It was the ___ holiday ever.", answers: ["best"] },
      { audio: "My sister wanted to go on a hot-air balloon ride.", display: "My sister wanted to go on a hot-air ___ ride.", answers: ["balloon"] },
      { audio: "The canal was full of colourful lanterns.", display: "The ___ was full of colourful lanterns.", answers: ["canal"] },
      { audio: "We bought some souvenirs for our family.", display: "We bought some ___ for our family.", answers: ["souvenirs"] },
    ],
    pronunciation: {
      focus: "-ed endings",
      words: ["looked /t/", "visited /ɪd/", "played /d/", "watched /t/", "wanted /ɪd/", "lived /d/"],
      chant: ""
    }
  },
  {
    id: 10,
    title: "Performing Arts",
    color: "pink",
    icon: "🎭",
    vocabulary: [
      { word: "autograph", pronunciation: "/ˈɔːtəɡrɑːf/", meaning: "the signature of a famous person, written for a fan", example: "I got the singer's autograph at the concert." },
      { word: "director", pronunciation: "/daɪˈrektə(r)/", meaning: "the person in charge of making a film or play", example: "The film director won three major awards." },
      { word: "film studio", pronunciation: "/fɪlm ˈstjuːdiəʊ/", meaning: "a place where films are made, with sets and equipment", example: "We visited the film studio and saw the actors." },
      { word: "make-up", pronunciation: "/ˈmeɪk ʌp/", meaning: "coloured substances put on the face for beauty or for acting", example: "The actors wore a lot of make-up for the film." },
      { word: "set", pronunciation: "/set/", meaning: "the place where a film or play is performed, with painted scenery", example: "The set for the action film looked very realistic." },
      { word: "action", pronunciation: "/ˈækʃn/", meaning: "a type of film with lots of exciting events, fights and adventure", example: "He loves watching action films." },
      { word: "animated", pronunciation: "/ˈænɪmeɪtɪd/", meaning: "made using drawings or computer graphics rather than live actors", example: "She is making a new animated film." },
      { word: "award", pronunciation: "/əˈwɔːd/", meaning: "a prize or honour given for achieving something special", example: "She won an award for best actress." },
      { word: "cartoon", pronunciation: "/kɑːˈtuːn/", meaning: "a film or TV programme made using animated drawings", example: "Children love watching cartoons on Saturday mornings." },
      { word: "character", pronunciation: "/ˈkærəktə(r)/", meaning: "a person or creature in a story, film or play", example: "The main character in the film is a brave girl." },
      { word: "company", pronunciation: "/ˈkʌmpəni/", meaning: "a business organisation that makes or sells things", example: "She works for a famous film company." },
      { word: "adventure", pronunciation: "/ədˈventʃə(r)/", meaning: "an exciting experience or type of story involving danger and discovery", example: "An adventure film takes you on a thrilling journey." },
      { word: "comedy", pronunciation: "/ˈkɒmədi/", meaning: "a type of film or play that is funny and makes people laugh", example: "A comedy always makes me smile." },
      { word: "fantasy", pronunciation: "/ˈfæntəsi/", meaning: "a type of story set in an imaginary world with magical creatures", example: "Fantasy films often have dragons and wizards." },
      { word: "musical", pronunciation: "/ˈmjuːzɪkl/", meaning: "a film or play where characters sing and dance to tell the story", example: "She loved the musical because the songs were beautiful." },
      { word: "science fiction", pronunciation: "/ˈsaɪəns ˈfɪkʃn/", meaning: "a type of story set in the future or in space with advanced technology", example: "Science fiction films often feature robots and spaceships." },
      { word: "actor", pronunciation: "/ˈæktə(r)/", meaning: "a person who plays a role in a film, play or TV programme", example: "The actor wore special make-up for his role." },
      { word: "actress", pronunciation: "/ˈæktrəs/", meaning: "a woman who plays a role in a film, play or TV programme", example: "The young actress won the award for best performance." },
      { word: "stage", pronunciation: "/steɪdʒ/", meaning: "a raised platform in a theatre where performers stand", example: "The dancers performed on a beautiful lit stage." },
      { word: "audience", pronunciation: "/ˈɔːdiəns/", meaning: "the people who watch and listen to a performance", example: "The audience cheered loudly at the end of the show." },
      { word: "applause", pronunciation: "/əˈplɔːz/", meaning: "the sound of many people clapping their hands to show appreciation", example: "There was loud applause at the end of the concert." },
      { word: "performance", pronunciation: "/pəˈfɔːməns/", meaning: "the act of entertaining an audience by singing, acting or dancing", example: "Her singing performance was truly amazing." },
      { word: "rehearse", pronunciation: "/rɪˈhɜːs/", meaning: "to practise a play, concert or performance before the real event", example: "The actors rehearsed their lines every morning." },
      { word: "costume", pronunciation: "/ˈkɒstjuːm/", meaning: "special clothes worn by an actor for a performance", example: "The princess costume was beautiful and sparkly." },
      { word: "scene", pronunciation: "/siːn/", meaning: "a part of a film or play that happens in one particular place", example: "The final scene of the film was very exciting." },
      { word: "drama", pronunciation: "/ˈdrɑːmə/", meaning: "a serious play or film about real-life situations", example: "She prefers drama films to comedies." },
      { word: "advert", pronunciation: "/ˈædvɜːt/", meaning: "a short film or picture that tries to persuade people to buy something", example: "She appeared in a famous food advert on TV." },
      { word: "won", pronunciation: "/wʌn/", meaning: "past tense of 'win'; was successful in a competition", example: "They won an award for the best animated film." },
      { word: "got", pronunciation: "/ɡɒt/", meaning: "past tense of 'get'; received or obtained something", example: "I got the singer's autograph at the concert." },
      { word: "saw", pronunciation: "/sɔː/", meaning: "past tense of 'see'; used one's eyes to look at something", example: "Did you see the new science fiction film?" },
      { word: "made", pronunciation: "/meɪd/", meaning: "past tense of 'make'; created or produced something", example: "They made a wonderful animated film last year." },
      { word: "anime", pronunciation: "/ˈænɪmeɪ/", meaning: "a style of Japanese animated film or TV show", example: "He loves watching Japanese anime films." },
    ],
    grammar: [
      {
        id: "g1",
        type: "multiple_choice",
        question: "I got the singer's autograph, but I ___ get the actor's.",
        options: ["did", "didn't", "don't", "doesn't"],
        answer: "didn't",
        explanation: "didn't + verb nguyên thể (phủ định quá khứ)"
      },
      {
        id: "g2",
        type: "fill_blank",
        question: "She ___ (win) an award last year.",
        answer: "won",
        hint: "win → ___ (bất quy tắc)"
      },
      {
        id: "g3",
        type: "fill_blank",
        question: "Did you ___ (see) that new film?",
        answer: "see",
        hint: "Did + subject + verb nguyên thể"
      },
      {
        id: "g4",
        type: "multiple_choice",
        question: "These are ___ favourite films.",
        options: ["my", "I", "me", "mine"],
        answer: "my",
        explanation: "my + noun = tính từ sở hữu"
      },
      { id: "g5", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["I", "didn't", "get", "the", "actor's", "autograph", "."], answer: "I didn't get the actor's autograph ." },
      { id: "g6", type: "fill_blank", question: "She ___ (make) a wonderful animated film last year.", answer: "made", hint: "make → ___ (bất quy tắc)" },
      { id: "g7", type: "multiple_choice", question: "Did you ___ that new comedy film?", options: ["see", "sees", "saw", "seen"], answer: "see", explanation: "Did + subject + verb nguyên thể" },
      { id: "g8", type: "fill_blank", question: "These are ___ favourite films.", answer: "my", hint: "Tính từ sở hữu + noun" },
      { id: "g9", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["They", "won", "an", "award", "for", "the", "best", "cartoon", "."], answer: "They won an award for the best cartoon ." },
      { id: "g10", type: "multiple_choice", question: "I ___ get the actor's autograph. (negative past)", options: ["didn't", "don't", "wasn't", "haven't"], answer: "didn't", explanation: "didn't + verb nguyên thể (phủ định quá khứ)" },
      { id: "g11", type: "fill_blank", question: "The director ___ (win) three awards last year.", answer: "won", hint: "win → ___ (bất quy tắc)" },
      { id: "g12", type: "multiple_choice", question: "Did she ___ in the new adventure film?", options: ["acts", "act", "acted", "acting"], answer: "act", explanation: "Did + subject + verb nguyên thể" },
      { id: "g13", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["She", "didn't", "want", "to", "leave", "the", "film", "studio", "."], answer: "She didn't want to leave the film studio ." },
    ],
    dictation: [
      "I got the singer's autograph but I did not get the actor's.",
      "She won an award for the best animated film.",
      "Did you see that new science fiction film?",
      "These are my favourite films: comedy, fantasy and musical.",
      "They made a wonderful animated film last year.",
      "I didn't want to leave the film studio.",
      "The director won three major awards last year.",
      "Did you see the new adventure film at the cinema?",
      "She got the autograph of the famous actress.",
      "We didn't have enough time to see the whole film.",
      "The audience cheered loudly at the end of the show.",
      "He saw the new fantasy film with his family.",
      "I loved the musical because the songs were beautiful.",
    ],
    writing: {
      title: "My Favourite Film",
      template: `My favourite film is [film name].
It is a [genre: comedy/fantasy/animated/musical] film.
The director is [name] and the main character is [name].
In the film, [character] [verb-ed] [action].
I [loved/enjoyed] it because [reason].
I [would/wouldn't] recommend it because [reason].`,
      prompts: [
        "Kể về bộ phim yêu thích dùng quá khứ đơn",
        "So sánh 2 thể loại phim dùng but",
        "Viết review phim ngắn: What happened? Did you like it?",
      ]
    },
    speaking: [
      "Tell me about your favourite film! What type is it? Who are the characters? (45 seconds)",
      "Did you watch a film recently? Tell me about it! (30 seconds)",
      "What type of film do you prefer: comedy, fantasy or animated? Why? (30 seconds)",
    ],
    reading: {
      title: "A Day at the Film Studio",
      passage: `Last Saturday, my class visited a famous film studio. It was an amazing day!

First, we met the director of a new animated film. She told us about her job. "I work with a great team," she said. "We create all the characters and their adventures."

Then, we went to see the set of an action film. The actors wore a lot of make-up. One actor got the autograph of the director but he did not get the actor's autograph. I got the singer's autograph!

We also visited the room where they make cartoon characters. The artists draw every movement. It takes a long time to make just one minute of an animated film. They won an award last year for the best cartoon.

After that, we watched parts of different films: a comedy, a fantasy film, a science fiction adventure, and a musical. I loved the musical the most because the songs were beautiful.

These are my favourite films now. I didn't want to leave the studio! I think I would like to be a film director one day. Did you ever visit a film studio?`,
      questions: [
        { type: "multiple_choice", question: "What kind of film is the director making?", options: ["An action film", "A musical", "An animated film", "A comedy"], answer: "An animated film" },
        { type: "true_false", question: "The writer got the director's autograph.", answer: false },
        { type: "multiple_choice", question: "What award did the cartoon team win?", options: ["Best action film", "Best cartoon", "Best musical", "Best director"], answer: "Best cartoon" },
        { type: "true_false", question: "The writer loved the musical the most.", answer: true },
        { type: "multiple_choice", question: "What does the writer want to be one day?", options: ["An actor", "A singer", "A cartoon artist", "A film director"], answer: "A film director" },
        { type: "short_answer", question: "What type of film has songs and dances? (one word)", answer: "musical" },
      ]
    },
    listenFill: [
      { audio: "I got the singer's autograph, but I did not get the actor's.", display: "I got the singer's autograph, but I did not get the ___'s.", answers: ["actor"] },
      { audio: "She won an award last year.", display: "She ___ an award last year.", answers: ["won"] },
      { audio: "Did you see that new science fiction film?", display: "Did you ___ that new science fiction film?", answers: ["see"] },
      { audio: "I didn't want to leave the studio.", display: "I ___ want to leave the studio.", answers: ["didn't"] },
      { audio: "The director creates all the characters and their adventures.", display: "The director ___ all the characters and their adventures.", answers: ["creates"] },
      { audio: "They made a wonderful animated film.", display: "They made a wonderful ___ film.", answers: ["animated"] },
      { audio: "These are my favourite films.", display: "These are my ___ films.", answers: ["favourite"] },
      { audio: "She made a wonderful animated film last year.", display: "She ___ a wonderful animated film last year.", answers: ["made"] },
      { audio: "The director won three major awards.", display: "The ___ won three major awards.", answers: ["director"] },
      { audio: "Did you see the new adventure film?", display: "Did you see the new ___ film?", answers: ["adventure"] },
      { audio: "She got the autograph of the famous actress.", display: "She got the ___ of the famous actress.", answers: ["autograph"] },
      { audio: "I loved the musical because the songs were beautiful.", display: "I loved the ___ because the songs were beautiful.", answers: ["musical"] },
      { audio: "The audience cheered loudly at the end of the show.", display: "The ___ cheered loudly at the end of the show.", answers: ["audience"] },
      { audio: "He saw the new fantasy film with his family.", display: "He saw the new ___ film with his family.", answers: ["fantasy"] },
      { audio: "The actors wore a lot of make-up for the film.", display: "The actors wore a lot of ___ for the film.", answers: ["make-up"] },
      { audio: "She won the award for best actress.", display: "She won the award for best ___.", answers: ["actress"] },
      { audio: "The cartoon team won the award last year.", display: "The cartoon team ___ the award last year.", answers: ["won"] },
      { audio: "I didn't get the director's autograph.", display: "I ___ get the director's autograph.", answers: ["didn't"] },
      { audio: "They rehearsed their lines every morning.", display: "They ___ their lines every morning.", answers: ["rehearsed"] },
      { audio: "The performers wore beautiful costumes on stage.", display: "The performers wore beautiful ___ on stage.", answers: ["costumes"] },
    ],
    pronunciation: {
      focus: "Sentence rhythm",
      words: ["I don't WANT to ANswer the PHONE"],
      chant: ""
    }
  },
  {
    id: 11,
    title: "Animals",
    color: "emerald",
    icon: "🦁",
    vocabulary: [
      { word: "binoculars", pronunciation: "/bɪˈnɒkjələz/", meaning: "an optical instrument held to the eyes to make distant things look closer", example: "She used binoculars to watch the birds in the trees." },
      { word: "butterfly", pronunciation: "/ˈbʌtəflaɪ/", meaning: "an insect with large, colourful wings that flies from flower to flower", example: "A beautiful blue butterfly landed on the flower." },
      { word: "cave", pronunciation: "/keɪv/", meaning: "a large hole in the side of a hill or cliff, or underground", example: "Bats live in dark caves." },
      { word: "insect", pronunciation: "/ˈɪnsekt/", meaning: "a small creature with six legs and usually wings, such as an ant or bee", example: "Ants and butterflies are common insects." },
      { word: "lizard", pronunciation: "/ˈlɪzəd/", meaning: "a small reptile with a long body and tail, four legs and scaly skin", example: "A green lizard was sitting on the warm stone wall." },
      { word: "torch", pronunciation: "/tɔːtʃ/", meaning: "a small electric light you can carry in your hand", example: "Take a torch when you explore a dark cave." },
      { word: "cheetah", pronunciation: "/ˈtʃiːtə/", meaning: "a large wild cat with black spots that is the fastest land animal", example: "Cheetahs can run faster than any other animal." },
      { word: "cub", pronunciation: "/kʌb/", meaning: "a young animal, especially a lion, tiger, bear or cheetah", example: "The little lion cub played with its mother." },
      { word: "friendship", pronunciation: "/ˈfrendʃɪp/", meaning: "the relationship between people or animals who are friends", example: "The friendship between the dog and the cheetah is unusual." },
      { word: "unusual", pronunciation: "/ʌnˈjuːʒuəl/", meaning: "not typical or ordinary; strange or surprising", example: "It is very unusual for a dog and a cheetah to be friends." },
      { word: "be together", pronunciation: "/biː təˈɡeðə(r)/", meaning: "to spend time with someone; to be in the same place", example: "The dog and cheetah are always together." },
      { word: "care for", pronunciation: "/keə(r) fɔː(r)/", meaning: "to look after and protect someone or something", example: "The zookeeper cares for the animals every day." },
      { word: "smart", pronunciation: "/smɑːt/", meaning: "intelligent; able to learn and understand things quickly", example: "My dog is really smart. She knows many commands." },
      { word: "really", pronunciation: "/ˈrɪəli/", meaning: "used to emphasise how true or strong something is; very", example: "This park is a really interesting place to visit." },
      { word: "habitat", pronunciation: "/ˈhæbɪtæt/", meaning: "the natural place where an animal or plant lives and grows", example: "The rainforest is the habitat of many rare animals." },
      { word: "wild", pronunciation: "/waɪld/", meaning: "living in nature and not tamed or kept by humans", example: "Wild cheetahs live on the grasslands of Africa." },
      { word: "domestic", pronunciation: "/dəˈmestɪk/", meaning: "kept as a pet or on a farm; not wild", example: "Dogs and cats are domestic animals." },
      { word: "endangered", pronunciation: "/ɪnˈdeɪndʒəd/", meaning: "at risk of disappearing from the world forever", example: "Tigers are an endangered species." },
      { word: "feather", pronunciation: "/ˈfeðə(r)/", meaning: "one of the light, flat things that cover a bird's body", example: "The parrot has beautiful colourful feathers." },
      { word: "fur", pronunciation: "/fɜː(r)/", meaning: "the soft, thick hair that covers the body of some animals", example: "The bear has thick, warm fur." },
      { word: "wing", pronunciation: "/wɪŋ/", meaning: "one of the two parts of a bird or insect used for flying", example: "The butterfly spread its wings and flew away." },
      { word: "mammal", pronunciation: "/ˈmæml/", meaning: "a warm-blooded animal that feeds its babies with milk; e.g. dogs, whales", example: "Whales are the largest mammals in the world." },
      { word: "loyal", pronunciation: "/ˈlɔɪəl/", meaning: "always supporting and being faithful to a person or animal", example: "Dogs are known for being loyal to their owners." },
      { word: "gentle", pronunciation: "/ˈdʒentl/", meaning: "kind, calm and not violent; not too strong or rough", example: "The elephant was surprisingly gentle with the children." },
      { word: "prey", pronunciation: "/preɪ/", meaning: "an animal that is hunted and eaten by another animal", example: "Small mice are the prey of owls." },
      { word: "predator", pronunciation: "/ˈpredətə(r)/", meaning: "an animal that hunts and kills other animals for food", example: "Lions are powerful predators in Africa." },
      { word: "camouflage", pronunciation: "/ˈkæməflɑːʒ/", meaning: "a way of hiding by looking like the surrounding environment", example: "The lizard uses camouflage to hide from predators." },
      { word: "migrate", pronunciation: "/maɪˈɡreɪt/", meaning: "to move to a different area or country, especially as seasons change", example: "Many birds migrate to warmer countries in winter." },
      { word: "hibernate", pronunciation: "/ˈhaɪbəneɪt/", meaning: "to spend the winter in a deep sleep to save energy", example: "Bears hibernate in caves during the cold winter months." },
      { word: "pet shop", pronunciation: "/pet ʃɒp/", meaning: "a shop that sells animals and supplies for keeping them as pets", example: "She bought a goldfish from the pet shop." },
      { word: "protect", pronunciation: "/prəˈtekt/", meaning: "to keep someone or something safe from harm or danger", example: "We must protect endangered animals from extinction." },
      { word: "intelligent", pronunciation: "/ɪnˈtelɪdʒənt/", meaning: "having or showing the ability to learn and understand things", example: "Dolphins are very intelligent animals." },
    ],
    grammar: [
      {
        id: "g1",
        type: "multiple_choice",
        question: "Snakes are ___ worms.",
        options: ["longer as", "longer than", "more long than", "longer then"],
        answer: "longer than",
        explanation: "Comparative: longer + than"
      },
      {
        id: "g2",
        type: "multiple_choice",
        question: "My dog is ___ smart.",
        options: ["real", "really", "very much", "real very"],
        answer: "really",
        explanation: "really = rất (trạng từ nhấn mạnh)"
      },
      {
        id: "g3",
        type: "fill_blank",
        question: "Cheetahs are ___ (fast) than dogs.",
        answer: "faster",
        hint: "fast → fast-er + than"
      },
      {
        id: "g4",
        type: "fill_blank",
        question: "This park is a ___ interesting place to visit.",
        answer: "really",
        hint: "Trạng từ nhấn mạnh trước tính từ"
      },
      { id: "g5", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["Elephants", "are", "bigger", "than", "dogs", "."], answer: "Elephants are bigger than dogs ." },
      { id: "g6", type: "fill_blank", question: "Cheetahs are ___ (fast) than any other animal.", answer: "faster", hint: "fast → fast-er + than" },
      { id: "g7", type: "multiple_choice", question: "My cat is ___ smart. She can open doors.", options: ["real", "really", "very much", "so much"], answer: "really", explanation: "really = trạng từ nhấn mạnh trước tính từ" },
      { id: "g8", type: "fill_blank", question: "Dolphins are ___ (intelligent) than many animals.", answer: "more intelligent", hint: "Tính từ dài: more + adj + than" },
      { id: "g9", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["Cheetahs", "are", "faster", "than", "dogs", "."], answer: "Cheetahs are faster than dogs ." },
      { id: "g10", type: "multiple_choice", question: "The cheetah is ___ big ___ the lion.", options: ["not as / as", "not so / as", "less / than", "smaller / as"], answer: "not as / as", explanation: "not as...as = không bằng" },
      { id: "g11", type: "fill_blank", question: "The nature park is a ___ interesting place.", answer: "really", hint: "Nhấn mạnh tính từ" },
      { id: "g12", type: "multiple_choice", question: "Dogs are ___ than cats at learning commands.", options: ["more smart", "smarter", "smartly", "most smart"], answer: "smarter", explanation: "smart → smarter (1 âm tiết)" },
      { id: "g13", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["The", "dog", "and", "the", "cheetah", "are", "really", "good", "friends", "."], answer: "The dog and the cheetah are really good friends ." },
    ],
    dictation: [
      "Snakes are longer than worms.",
      "In some zoos, people put dogs with cheetahs to help them relax.",
      "My dog is really smart.",
      "This park is a really interesting place to visit.",
      "Cheetahs are faster than any other animal on land.",
      "The friendship between the dog and the cheetah is unusual.",
      "Elephants are bigger and heavier than horses.",
      "My dog is really clever. She knows many commands.",
      "The butterfly is really beautiful with its colourful wings.",
      "Dolphins are more intelligent than most other animals.",
      "The cheetah cub follows the dog everywhere.",
      "Their friendship is really unusual but really special.",
      "I used my binoculars to watch birds in the park.",
    ],
    writing: {
      title: "My Favourite Animal",
      template: `My favourite animal is the [animal].
It is [bigger/smaller/faster/slower] than [comparison animal].
It is really [adjective] because [reason].
[Animal]s live in [habitat].
They eat [food].
I think [animal]s are [adjective] because [reason].`,
      prompts: [
        "So sánh 2 động vật dùng comparative adjectives (bigger, faster, longer...)",
        "Dùng really để nhấn mạnh khi mô tả động vật yêu thích",
        "Viết về mối quan hệ bạn bè đặc biệt giữa 2 loài động vật",
      ]
    },
    speaking: [
      "Compare two animals! Which is bigger/faster/smarter? (30 seconds)",
      "Tell me about an unusual animal friendship! (30 seconds)",
      "Describe your favourite animal using 'really' to emphasise! (30 seconds)",
    ],
    reading: {
      title: "An Unusual Friendship",
      passage: `In some zoos around the world, there is an unusual friendship between dogs and cheetahs. Cheetahs are the fastest animals on land. They can run faster than any other animal. But in zoos, cheetahs are often sad and stressed.

To help them, zookeepers put a dog with each cheetah. Dogs are friendly and relaxed animals. They really help the cheetahs to feel safe and calm.

The dog and the cheetah grow up together from when they are young. The cheetah cub follows the dog everywhere. They eat together, sleep together, and play together. Their friendship is really unusual but really special!

Scientists say that cheetahs are smarter than people think. My dog is really smart, too. She can open doors and knows more than fifty words! Dogs are truly clever pets.

Last week, I used my binoculars to watch birds in the garden. I saw a beautiful butterfly land on a flower. Then a small lizard ran across the wall. I love watching animals in nature. This park is a really interesting place to visit. Nature is full of amazing surprises!`,
      questions: [
        { type: "multiple_choice", question: "Why are cheetahs in zoos often sad?", options: ["They are hungry", "They are stressed and lonely", "They are too hot", "They miss running"], answer: "They are stressed and lonely" },
        { type: "true_false", question: "Cheetahs are the fastest animals on land.", answer: true },
        { type: "multiple_choice", question: "What do the dog and cheetah do together?", options: ["Only eat together", "Only sleep together", "Eat, sleep, and play together", "Only play together"], answer: "Eat, sleep, and play together" },
        { type: "true_false", question: "The writer's dog knows more than fifty words.", answer: true },
        { type: "multiple_choice", question: "What did the writer see land on a flower?", options: ["A lizard", "A butterfly", "A bird", "An insect"], answer: "A butterfly" },
        { type: "short_answer", question: "What tool did the writer use to watch birds? (one word)", answer: "binoculars" },
      ]
    },
    listenFill: [
      { audio: "Snakes are longer than worms.", display: "Snakes are ___ than worms.", answers: ["longer"] },
      { audio: "In some zoos, people put dogs with cheetahs to help them relax.", display: "In some zoos, people put dogs with cheetahs to help them ___.", answers: ["relax"] },
      { audio: "My dog is really smart.", display: "My dog is ___ smart.", answers: ["really"] },
      { audio: "This park is a really interesting place to visit.", display: "This park is a really ___ place to visit.", answers: ["interesting"] },
      { audio: "Elephants are bigger than dogs.", display: "Elephants are ___ than dogs.", answers: ["bigger"] },
      { audio: "The cheetah cub follows the dog everywhere.", display: "The cheetah ___ follows the dog everywhere.", answers: ["cub"] },
      { audio: "Their friendship is unusual but very special.", display: "Their ___ is unusual but very special.", answers: ["friendship"] },
      { audio: "Cheetahs are faster than any other animal on land.", display: "Cheetahs are ___ than any other animal on land.", answers: ["faster"] },
      { audio: "The butterfly landed on the flower.", display: "The ___ landed on the flower.", answers: ["butterfly"] },
      { audio: "Dolphins are more intelligent than most animals.", display: "Dolphins are more ___ than most animals.", answers: ["intelligent"] },
      { audio: "The dog and the cheetah grow up together.", display: "The dog and the cheetah grow ___ together.", answers: ["up"] },
      { audio: "My dog knows more than fifty words.", display: "My dog knows more than ___ words.", answers: ["fifty"] },
      { audio: "She used binoculars to watch birds in the park.", display: "She used ___ to watch birds in the park.", answers: ["binoculars"] },
      { audio: "Wild cheetahs live on the grasslands of Africa.", display: "Wild cheetahs live on the ___ of Africa.", answers: ["grasslands"] },
      { audio: "Dogs are more loyal than many other animals.", display: "Dogs are more ___ than many other animals.", answers: ["loyal"] },
      { audio: "The lizard ran quickly across the stone wall.", display: "The ___ ran quickly across the stone wall.", answers: ["lizard"] },
      { audio: "Many birds migrate to warmer countries in winter.", display: "Many birds ___ to warmer countries in winter.", answers: ["migrate"] },
      { audio: "Bears hibernate in caves during winter.", display: "Bears ___ in caves during winter.", answers: ["hibernate"] },
      { audio: "Tigers are an endangered species.", display: "Tigers are an ___ species.", answers: ["endangered"] },
      { audio: "The elephant was surprisingly gentle with the children.", display: "The elephant was surprisingly ___ with the children.", answers: ["gentle"] },
    ],
    pronunciation: {
      focus: "Question intonation",
      words: ["Do birds have FEATHERS? ↗", "Can cheetahs swim? ↗"],
      chant: ""
    }
  },
  {
    id: 12,
    title: "Weather and Nature",
    color: "sky",
    icon: "🌈",
    vocabulary: [
      { word: "boiling", pronunciation: "/ˈbɔɪlɪŋ/", meaning: "extremely hot, uncomfortably so; as hot as boiling water", example: "It is boiling today! Let's go inside." },
      { word: "environment", pronunciation: "/ɪnˈvaɪrənmənt/", meaning: "the natural world around us, including air, water, land and living things", example: "We must protect our environment for future generations." },
      { word: "geothermal energy", pronunciation: "/ˌdʒiːəʊˈθɜːml ˈenədʒi/", meaning: "energy produced from the natural heat deep inside the Earth", example: "Iceland uses geothermal energy to heat homes." },
      { word: "rainforest", pronunciation: "/ˈreɪnfɒrɪst/", meaning: "a thick forest in a tropical area that receives a lot of rain", example: "Millions of species live in the Amazon rainforest." },
      { word: "underground", pronunciation: "/ˌʌndəˈɡraʊnd/", meaning: "below the surface of the ground", example: "Geothermal energy comes from heat underground." },
      { word: "storm", pronunciation: "/stɔːm/", meaning: "very bad weather with strong winds, heavy rain, thunder or snow", example: "A big storm hit the coast last night." },
      { word: "tornado", pronunciation: "/tɔːˈneɪdəʊ/", meaning: "a violent, spinning column of air that destroys everything in its path", example: "A tornado can destroy houses in seconds." },
      { word: "treasure", pronunciation: "/ˈtreʒə(r)/", meaning: "a collection of valuable things; something very precious", example: "We found a hidden treasure box in the forest." },
      { word: "geocaching", pronunciation: "/ˈdʒiːəʊkæʃɪŋ/", meaning: "an outdoor activity where you use GPS to find hidden objects", example: "Geocaching is like a modern treasure hunt." },
      { word: "GPS", pronunciation: "/ˌdʒiː piː ˈes/", meaning: "a system that uses satellites to show your exact position on Earth", example: "Use your GPS app to find the hidden treasure." },
      { word: "app", pronunciation: "/æp/", meaning: "a computer programme designed for use on a phone or tablet", example: "She used a special app to find the hidden box." },
      { word: "temperature", pronunciation: "/ˈtemprətʃə(r)/", meaning: "a measure of how hot or cold something is", example: "The temperature in the desert can reach 50 degrees." },
      { word: "climate", pronunciation: "/ˈklaɪmət/", meaning: "the typical weather conditions in an area over a long period", example: "Vietnam has a tropical climate with hot summers." },
      { word: "season", pronunciation: "/ˈsiːzn/", meaning: "one of the four periods of the year (spring, summer, autumn, winter)", example: "What is your favourite season of the year?" },
      { word: "sunny", pronunciation: "/ˈsʌni/", meaning: "having a lot of bright sunshine", example: "It is a beautiful, sunny day today." },
      { word: "rainy", pronunciation: "/ˈreɪni/", meaning: "having a lot of rain; wet weather", example: "The rainy season in Vietnam starts in June." },
      { word: "windy", pronunciation: "/ˈwɪndi/", meaning: "having a lot of wind blowing", example: "It is very windy today — hold your hat!" },
      { word: "foggy", pronunciation: "/ˈfɒɡi/", meaning: "having thick mist that makes it difficult to see", example: "The mountains look mysterious on a foggy morning." },
      { word: "flood", pronunciation: "/flʌd/", meaning: "when a large amount of water covers land that is usually dry", example: "Heavy rain caused a flood in the low-lying areas." },
      { word: "recycle", pronunciation: "/ˌriːˈsaɪkl/", meaning: "to process used materials so they can be used again", example: "We recycle paper, glass and plastic at school." },
      { word: "pollution", pronunciation: "/pəˈluːʃn/", meaning: "damage to the environment caused by harmful substances", example: "Air pollution is a serious problem in big cities." },
      { word: "solar energy", pronunciation: "/ˈsəʊlə ˈenədʒi/", meaning: "energy produced from sunlight using solar panels", example: "Solar energy is clean and good for the environment." },
      { word: "natural", pronunciation: "/ˈnætʃrəl/", meaning: "existing in nature; not made by humans", example: "The waterfall is a beautiful natural wonder." },
      { word: "resource", pronunciation: "/rɪˈzɔːs/", meaning: "something in nature that people use, such as water, oil or forests", example: "We must use our natural resources carefully." },
      { word: "will", pronunciation: "/wɪl/", meaning: "used to talk about what is going to happen in the future", example: "The scientists will follow the river next year." },
      { word: "won't", pronunciation: "/wəʊnt/", meaning: "will not; used to say something is not going to happen", example: "We won't drive to the forest next Sunday." },
      { word: "going to", pronunciation: "/ˈɡəʊɪŋ tuː/", meaning: "used to talk about plans or intentions for the future", example: "I am going to learn how to swim this summer." },
      { word: "in the future", pronunciation: "/ɪn ðə ˈfjuːtʃə(r)/", meaning: "at a time after now; at some point ahead", example: "In the future, we will use more clean energy." },
      { word: "protect", pronunciation: "/prəˈtekt/", meaning: "to keep something safe from damage or harm", example: "We must protect the rainforest from destruction." },
      { word: "earthquake", pronunciation: "/ˈɜːθkweɪk/", meaning: "a sudden violent shaking of the ground caused by movement inside the Earth", example: "The earthquake damaged many buildings in the city." },
      { word: "iceberg", pronunciation: "/ˈaɪsbɜːɡ/", meaning: "a very large mass of ice floating in the sea, most of which is underwater", example: "Climate change is causing icebergs to melt." },
      { word: "destroy", pronunciation: "/dɪˈstrɔɪ/", meaning: "to damage something so badly that it no longer exists or works", example: "Pollution is destroying the natural environment." },
    ],
    grammar: [
      {
        id: "g1",
        type: "multiple_choice",
        question: "We ___ drive to the forest next Sunday.",
        options: ["won't", "will not to", "don't will", "not will"],
        answer: "won't",
        explanation: "won't = will not (phủ định tương lai)"
      },
      {
        id: "g2",
        type: "multiple_choice",
        question: "The scientists ___ follow the river next year.",
        options: ["will", "are", "going", "go"],
        answer: "will",
        explanation: "will + verb = tương lai đơn"
      },
      {
        id: "g3",
        type: "fill_blank",
        question: "This summer, I am ___ to learn how to swim.",
        answer: "going",
        hint: "be going to = kế hoạch tương lai"
      },
      {
        id: "g4",
        type: "fill_blank",
        question: "Oh, we don't have pumpkins. I ___ get one from the supermarket.",
        answer: "will",
        hint: "Quyết định tức thời → will"
      },
      { id: "g5", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["I", "am", "going", "to", "visit", "Ha", "Long", "Bay", "this", "summer", "."], answer: "I am going to visit Ha Long Bay this summer ." },
      { id: "g6", type: "fill_blank", question: "Oh, it is raining! I ___ get an umbrella.", answer: "will", hint: "Quyết định tức thời → will" },
      { id: "g7", type: "multiple_choice", question: "She ___ be a scientist in the future.", options: ["will", "won't", "is going to", "going to"], answer: "will", explanation: "will + verb = dự đoán tương lai" },
      { id: "g8", type: "fill_blank", question: "They ___ (not/cut) down any more trees in this forest.", answer: "won't cut", hint: "won't = will not" },
      { id: "g9", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["She", "is", "going", "to", "plant", "tomatoes", "in", "her", "garden", "."], answer: "She is going to plant tomatoes in her garden ." },
      { id: "g10", type: "multiple_choice", question: "Next year, I ___ learn to speak Spanish.", options: ["am going to", "will", "won't", "going to"], answer: "am going to", explanation: "be going to = kế hoạch đã có sẵn" },
      { id: "g11", type: "fill_blank", question: "In the future, some places ___ be hotter than today.", answer: "will", hint: "Dự đoán tương lai" },
      { id: "g12", type: "multiple_choice", question: "I haven't decided yet, but maybe I ___ visit the museum.", options: ["will", "am going to", "going to", "won't"], answer: "will", explanation: "will = quyết định chưa chắc chắn / tức thời" },
      { id: "g13", type: "reorder", question: "Sắp xếp thành câu đúng:", words: ["We", "must", "protect", "the", "rainforest", "for", "future", "generations", "."], answer: "We must protect the rainforest for future generations ." },
    ],
    dictation: [
      "We won't drive to the forest next Sunday.",
      "The scientists will follow the river next year.",
      "This summer holiday, I am going to learn how to swim.",
      "We must protect our environment for the future.",
      "In the future, some places will be hotter than today.",
      "She is going to plant tomatoes in her garden.",
      "We won't cut down any more trees in this forest.",
      "I am going to learn how to grow vegetables this summer.",
      "People will use more clean energy in the future.",
      "The scientists will study the rainforest next year.",
      "She is going to recycle all her plastic and paper.",
      "We must protect the environment for future generations.",
      "It is raining, so I will take an umbrella.",
    ],
    writing: {
      title: "My Plans for the Future",
      template: `Next [holiday/year], I am going to [plan].
I will [activity] and [activity].
I won't [thing you won't do].
I think in the future, [prediction about environment/weather].
We should [action to protect environment] because [reason].`,
      prompts: [
        "Viết kế hoạch kỳ nghỉ hè dùng going to",
        "Dự đoán tương lai về môi trường dùng will/won't",
        "Phân biệt will (quyết định tức thời) và going to (kế hoạch có sẵn)",
      ]
    },
    speaking: [
      "What are you going to do this summer? Tell me your plans! (30 seconds)",
      "Will the weather be better or worse in the future? Why? (30 seconds)",
      "How will you protect the environment? Give 3 ideas using will! (45 seconds)",
    ],
    reading: {
      title: "The Future of Our Planet",
      passage: `Our planet is changing. Scientists say that the weather will be different in the future. Some places will be hotter, and some places will get more storms and tornadoes. We must protect our environment now.

Last week, my class learned about geothermal energy. In Iceland, people use heat from underground to make electricity. This is good for the environment because it does not make smoke or pollution.

In rainforests around the world, millions of animals and plants live together. But every year, people cut down more trees. If we are not careful, the rainforests will disappear. The scientists will follow the river next year to study the changes.

My teacher showed us a fun outdoor activity called geocaching. You use a GPS or an app on your phone to find hidden treasure boxes outside. It is like a treasure hunt! We won't drive to the forest next Sunday – we will walk there and do geocaching. It is good exercise and good for the environment.

This summer holiday, I am going to learn how to grow vegetables. I will plant tomatoes and cucumbers in my garden. I will not use any chemicals – just water and sunlight. I want to help protect our environment for the future!`,
      questions: [
        { type: "multiple_choice", question: "What does geothermal energy use?", options: ["Sun energy", "Heat from underground", "Wind energy", "Water energy"], answer: "Heat from underground" },
        { type: "true_false", question: "Geothermal energy makes a lot of smoke and pollution.", answer: false },
        { type: "multiple_choice", question: "What is geocaching?", options: ["A type of running race", "A treasure hunt using GPS", "A way to study weather", "A type of plant growing"], answer: "A treasure hunt using GPS" },
        { type: "true_false", question: "The class will drive to the forest for geocaching.", answer: false },
        { type: "multiple_choice", question: "What is the writer going to grow this summer?", options: ["Flowers and fruit", "Tomatoes and cucumbers", "Pumpkins and carrots", "Herbs and spices"], answer: "Tomatoes and cucumbers" },
        { type: "short_answer", question: "What will the scientists follow next year? (one word)", answer: "river" },
      ]
    },
    listenFill: [
      { audio: "We won't drive to the forest next Sunday.", display: "We ___ drive to the forest next Sunday.", answers: ["won't"] },
      { audio: "The scientists will follow the river next year.", display: "The scientists ___ follow the river next year.", answers: ["will"] },
      { audio: "This summer holiday, I am going to learn how to swim.", display: "This summer holiday, I am ___ to learn how to swim.", answers: ["going"] },
      { audio: "Oh, I will get one from the supermarket.", display: "Oh, I ___ get one from the supermarket.", answers: ["will"] },
      { audio: "We must protect our environment for the future.", display: "We must protect our ___ for the future.", answers: ["environment"] },
      { audio: "In the future, some places will be hotter.", display: "In the future, some places ___ be hotter.", answers: ["will"] },
      { audio: "People use heat from underground to make electricity.", display: "People use heat from ___ to make electricity.", answers: ["underground"] },
      { audio: "She is going to plant tomatoes in her garden.", display: "She is going to ___ tomatoes in her garden.", answers: ["plant"] },
      { audio: "We won't cut down any more trees in this forest.", display: "We won't cut down any more ___ in this forest.", answers: ["trees"] },
      { audio: "People will use more clean energy in the future.", display: "People ___ use more clean energy in the future.", answers: ["will"] },
      { audio: "She is going to recycle all her plastic and paper.", display: "She is going to ___ all her plastic and paper.", answers: ["recycle"] },
      { audio: "It is raining, so I will take an umbrella.", display: "It is raining, so I ___ take an umbrella.", answers: ["will"] },
      { audio: "The rainforest is home to millions of animals.", display: "The ___ is home to millions of animals.", answers: ["rainforest"] },
      { audio: "A tornado can destroy houses in seconds.", display: "A ___ can destroy houses in seconds.", answers: ["tornado"] },
      { audio: "We are going to find hidden treasure with GPS.", display: "We are going to find hidden ___ with GPS.", answers: ["treasure"] },
      { audio: "In the future, people will use more solar energy.", display: "In the future, people will use more ___ energy.", answers: ["solar"] },
      { audio: "She is going to learn how to grow vegetables.", display: "She is going to learn how to ___ vegetables.", answers: ["grow"] },
      { audio: "The temperature in summer will be very high.", display: "The ___ in summer will be very high.", answers: ["temperature"] },
      { audio: "We use GPS to find the hidden box outside.", display: "We use ___ to find the hidden box outside.", answers: ["GPS"] },
      { audio: "The scientists will study the changes in the rainforest.", display: "The scientists will ___ the changes in the rainforest.", answers: ["study"] },
    ],
    pronunciation: {
      focus: "Question with 'Why'",
      words: ["WHY do you LIKE summer?", "WHY is the rainforest important?"],
      chant: ""
    }
  }
];
