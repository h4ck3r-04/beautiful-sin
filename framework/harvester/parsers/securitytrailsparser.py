class Parser:
    def __init__(self, word, text) -> None:
        self.word = word
        self.text = text
        self.hostnames: set = set()
        self.ips: set = set()

    async def parse_text(self) -> tuple[set, set]:
        sub_domain_flag = 0
        self.text = str(self.text).splitlines()
        for index in range(0, len(self.text)):
            line = self.text[index].strip()
            if '"ip":' in line:
                ip = ''
                for ch in line[7:]:
                    if ch == "":
                        break
                    else:
                        ip += ch
                self.ips.add(ip)
            elif '"subdomains":' in line:
                sub_domain_flag = 1
                continue
            elif sub_domain_flag > 0:
                if ']' in line:
                    sub_domain_flag = 0
                else:
                    if 'www' in self.word:
                        self.word = str(
                            self.word).replace(
                            'www.',
                            '').replace(
                            'www',
                            '')
                    self.hostnames.add(
                        str(line).replace(
                            '"', '').replace(
                            ',', '') + '.' + self.word)
            else:
                continue
        return self.ips, self.hostnames
