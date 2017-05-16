(function() {var implementors = {};
implementors["bincode"] = ["impl&lt;'a, R, S, E&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a> for &amp;'a mut <a class=\"struct\" href=\"bincode/endian_choice/struct.Deserializer.html\" title=\"struct bincode::endian_choice::Deserializer\">Deserializer</a>&lt;R, S, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"bincode/trait.SizeLimit.html\" title=\"trait bincode::SizeLimit\">SizeLimit</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"byteorder/trait.ByteOrder.html\" title=\"trait byteorder::ByteOrder\">ByteOrder</a>,&nbsp;</span>",];
implementors["serde_json"] = ["impl&lt;'de, 'a, R:&nbsp;<a class=\"trait\" href=\"serde_json/de/trait.Read.html\" title=\"trait serde_json::de::Read\">Read</a>&lt;'de&gt;&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;'a mut <a class=\"struct\" href=\"serde_json/de/struct.Deserializer.html\" title=\"struct serde_json::de::Deserializer\">Deserializer</a>&lt;R&gt;","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"enum\" href=\"serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;'de <a class=\"enum\" href=\"serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_json/struct.Number.html\" title=\"struct serde_json::Number\">Number</a>","impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;'a <a class=\"struct\" href=\"serde_json/struct.Number.html\" title=\"struct serde_json::Number\">Number</a>",];
implementors["tantivy"] = ["impl&lt;'a, R, S, E&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a> for &amp;'a mut <a class=\"struct\" href=\"bincode/serde/reader/struct.Deserializer.html\" title=\"struct bincode::serde::reader::Deserializer\">Deserializer</a>&lt;R, S, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"byteorder/trait.ByteOrder.html\" title=\"trait byteorder::ByteOrder\">ByteOrder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"bincode/trait.SizeLimit.html\" title=\"trait bincode::SizeLimit\">SizeLimit</a>,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
