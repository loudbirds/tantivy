(function() {var implementors = {};
implementors["ascii"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"ascii/struct.ToAsciiCharError.html\" title=\"struct ascii::ToAsciiCharError\">ToAsciiCharError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"ascii/struct.AsAsciiStrError.html\" title=\"struct ascii::AsAsciiStrError\">AsAsciiStrError</a>",];
implementors["atomicwrites"] = ["impl&lt;E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">ErrorTrait</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">ErrorTrait</a> for <a class=\"enum\" href=\"atomicwrites/enum.Error.html\" title=\"enum atomicwrites::Error\">Error</a>&lt;E&gt;",];
implementors["bincode"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bincode/enum.ErrorKind.html\" title=\"enum bincode::ErrorKind\">ErrorKind</a>",];
implementors["combine"] = ["impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">StdError</a> for <a class=\"struct\" href=\"combine/primitives/struct.ParseError.html\" title=\"struct combine::primitives::ParseError\">ParseError</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"combine/trait.Stream.html\" title=\"trait combine::Stream\">Stream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"trait\" href=\"combine/trait.StreamOnce.html\" title=\"trait combine::StreamOnce\">Range</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"trait\" href=\"combine/trait.StreamOnce.html\" title=\"trait combine::StreamOnce\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"trait\" href=\"combine/trait.StreamOnce.html\" title=\"trait combine::StreamOnce\">Position</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>,&nbsp;</span>",];
implementors["fst"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"fst/enum.Error.html\" title=\"enum fst::Error\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"fst/enum.LevenshteinError.html\" title=\"enum fst::LevenshteinError\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"fst/raw/enum.Error.html\" title=\"enum fst::raw::Error\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"fst/enum.RegexError.html\" title=\"enum fst::RegexError\">Error</a>",];
implementors["futures"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/sync/oneshot/struct.Canceled.html\" title=\"struct futures::sync::oneshot::Canceled\">Canceled</a>","impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/sync/mpsc/struct.SendError.html\" title=\"struct futures::sync::mpsc::SendError\">SendError</a>&lt;T&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/unsync/mpsc/struct.SendError.html\" title=\"struct futures::unsync::mpsc::SendError\">SendError</a>&lt;T&gt;",];
implementors["itertools"] = [];
implementors["libc"] = [];
implementors["log"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"log/struct.SetLoggerError.html\" title=\"struct log::SetLoggerError\">SetLoggerError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"log/struct.ShutdownLoggerError.html\" title=\"struct log::ShutdownLoggerError\">ShutdownLoggerError</a>",];
implementors["lz4"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"lz4/liblz4/struct.LZ4Error.html\" title=\"struct lz4::liblz4::LZ4Error\">LZ4Error</a>",];
implementors["nix"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"void/enum.Void.html\" title=\"enum void::Void\">Void</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"nix/enum.Errno.html\" title=\"enum nix::Errno\">Errno</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"nix/enum.Error.html\" title=\"enum nix::Error\">Error</a>",];
implementors["regex"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"regex/enum.Error.html\" title=\"enum regex::Error\">Error</a>",];
implementors["regex_syntax"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"regex_syntax/struct.Error.html\" title=\"struct regex_syntax::Error\">Error</a>",];
implementors["serde"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"serde/de/value/struct.Error.html\" title=\"struct serde::de::value::Error\">Error</a>",];
implementors["serde_json"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"serde_json/error/struct.Error.html\" title=\"struct serde_json::error::Error\">Error</a>",];
implementors["syn"] = [];
implementors["tantivy"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"uuid/enum.ParseError.html\" title=\"enum uuid::ParseError\">ParseError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"serde_json/error/struct.Error.html\" title=\"struct serde_json::error::Error\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tempfile/named/struct.PersistError.html\" title=\"struct tempfile::named::PersistError\">PersistError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"regex_syntax/struct.Error.html\" title=\"struct regex_syntax::Error\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"log/struct.SetLoggerError.html\" title=\"struct log::SetLoggerError\">SetLoggerError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"log/struct.ShutdownLoggerError.html\" title=\"struct log::ShutdownLoggerError\">ShutdownLoggerError</a>","impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"combine/primitives/struct.ParseError.html\" title=\"struct combine::primitives::ParseError\">ParseError</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"combine/primitives/trait.Stream.html\" title=\"trait combine::primitives::Stream\">Stream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as <a class=\"trait\" href=\"combine/primitives/trait.StreamOnce.html\" title=\"trait combine::primitives::StreamOnce\">StreamOnce</a>&gt;::<a class=\"trait\" href=\"combine/primitives/trait.StreamOnce.html\" title=\"trait combine::primitives::StreamOnce\">Range</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as <a class=\"trait\" href=\"combine/primitives/trait.StreamOnce.html\" title=\"trait combine::primitives::StreamOnce\">StreamOnce</a>&gt;::<a class=\"trait\" href=\"combine/primitives/trait.StreamOnce.html\" title=\"trait combine::primitives::StreamOnce\">Range</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as <a class=\"trait\" href=\"combine/primitives/trait.StreamOnce.html\" title=\"trait combine::primitives::StreamOnce\">StreamOnce</a>&gt;::<a class=\"trait\" href=\"combine/primitives/trait.StreamOnce.html\" title=\"trait combine::primitives::StreamOnce\">Range</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as <a class=\"trait\" href=\"combine/primitives/trait.StreamOnce.html\" title=\"trait combine::primitives::StreamOnce\">StreamOnce</a>&gt;::<a class=\"trait\" href=\"combine/primitives/trait.StreamOnce.html\" title=\"trait combine::primitives::StreamOnce\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as <a class=\"trait\" href=\"combine/primitives/trait.StreamOnce.html\" title=\"trait combine::primitives::StreamOnce\">StreamOnce</a>&gt;::<a class=\"trait\" href=\"combine/primitives/trait.StreamOnce.html\" title=\"trait combine::primitives::StreamOnce\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as <a class=\"trait\" href=\"combine/primitives/trait.StreamOnce.html\" title=\"trait combine::primitives::StreamOnce\">StreamOnce</a>&gt;::<a class=\"trait\" href=\"combine/primitives/trait.StreamOnce.html\" title=\"trait combine::primitives::StreamOnce\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as <a class=\"trait\" href=\"combine/primitives/trait.StreamOnce.html\" title=\"trait combine::primitives::StreamOnce\">StreamOnce</a>&gt;::<a class=\"trait\" href=\"combine/primitives/trait.StreamOnce.html\" title=\"trait combine::primitives::StreamOnce\">Position</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as <a class=\"trait\" href=\"combine/primitives/trait.StreamOnce.html\" title=\"trait combine::primitives::StreamOnce\">StreamOnce</a>&gt;::<a class=\"trait\" href=\"combine/primitives/trait.StreamOnce.html\" title=\"trait combine::primitives::StreamOnce\">Position</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as <a class=\"trait\" href=\"combine/primitives/trait.StreamOnce.html\" title=\"trait combine::primitives::StreamOnce\">StreamOnce</a>&gt;::<a class=\"trait\" href=\"combine/primitives/trait.StreamOnce.html\" title=\"trait combine::primitives::StreamOnce\">Position</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>,&nbsp;</span>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"serde/de/value/struct.Error.html\" title=\"struct serde::de::value::Error\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"ascii/ascii_char/struct.ToAsciiCharError.html\" title=\"struct ascii::ascii_char::ToAsciiCharError\">ToAsciiCharError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"ascii/ascii_str/struct.AsAsciiStrError.html\" title=\"struct ascii::ascii_str::AsAsciiStrError\">AsAsciiStrError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"time/duration/struct.OutOfRangeError.html\" title=\"struct time::duration::OutOfRangeError\">OutOfRangeError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"time/enum.ParseError.html\" title=\"enum time::ParseError\">ParseError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bincode/serde/enum.ErrorKind.html\" title=\"enum bincode::serde::ErrorKind\">ErrorKind</a>","impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"atomicwrites/enum.Error.html\" title=\"enum atomicwrites::Error\">Error</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a>,&nbsp;</span>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"fst/error/enum.Error.html\" title=\"enum fst::error::Error\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"fst/levenshtein/error/enum.Error.html\" title=\"enum fst::levenshtein::error::Error\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"fst/raw/error/enum.Error.html\" title=\"enum fst::raw::error::Error\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"fst/regex/error/enum.Error.html\" title=\"enum fst::regex::error::Error\">Error</a>","impl&lt;T, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/stream/channel/struct.SendError.html\" title=\"struct futures::stream::channel::SendError\">SendError</a>&lt;T, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>,&nbsp;</span>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/sync/oneshot/struct.Canceled.html\" title=\"struct futures::sync::oneshot::Canceled\">Canceled</a>","impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/sync/mpsc/struct.SendError.html\" title=\"struct futures::sync::mpsc::SendError\">SendError</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>,&nbsp;</span>","impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/unsync/mpsc/struct.SendError.html\" title=\"struct futures::unsync::mpsc::SendError\">SendError</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>,&nbsp;</span>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"lz4/liblz4/struct.LZ4Error.html\" title=\"struct lz4::liblz4::LZ4Error\">LZ4Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"void/enum.Void.html\" title=\"enum void::Void\">Void</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"regex/error/enum.Error.html\" title=\"enum regex::error::Error\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"serde/de/value/struct.Error.html\" title=\"struct serde::de::value::Error\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"nix/errno/consts/enum.Errno.html\" title=\"enum nix::errno::consts::Errno\">Errno</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"nix/enum.Error.html\" title=\"enum nix::Error\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"regex_syntax/struct.Error.html\" title=\"struct regex_syntax::Error\">Error</a>",];
implementors["tempfile"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tempfile/struct.PersistError.html\" title=\"struct tempfile::PersistError\">PersistError</a>",];
implementors["time"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"time/struct.OutOfRangeError.html\" title=\"struct time::OutOfRangeError\">OutOfRangeError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"time/enum.ParseError.html\" title=\"enum time::ParseError\">ParseError</a>",];
implementors["uuid"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"uuid/enum.ParseError.html\" title=\"enum uuid::ParseError\">ParseError</a>",];
implementors["void"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"void/enum.Void.html\" title=\"enum void::Void\">Void</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
