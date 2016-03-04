start
  = !'\n' sections:section* { return sections }

section
  = '\n'? '-%- ' attr:sectionAttr ' -%-\n\n' data:sectionData {
        attr.data = data; return attr;
    }

sectionAttr
  = name:$((!' -%-' !'\n' .)+) {
        return { name };
    }

sectionData
  = $((!'\n-%- ' .)*)
