# d-encode-decode


Simple way to create Encoded Text and Decoded Text. but why d-encode-decode?
its Simple. It Generate Unique Text for every encode and you can decode all unique encoded text and getting same output.
also if you want to add expire time for decoding that you can do too.

## Installation

Use the package manager [npm](https://npmjs.com/) to install d-encode-decode.

```bash
npm install d-encode-decode
```

## Basic usage

```javascript
const d=require('d-encode-decode')

# returns '580d5a595a505a505a084d4d4a4a4d4d5c515c515d0d5c0b5c0f'
d.encode('hello')

# Everytime you encode same string and get different unique encoded value
# for "Hello" It returns
# 595e5b085b5a5b5a5b594d4d4a4a4d4d5c0c5d0d5c0d5c0a
# 5b5d595059595959595a4d4d4a4a4d4d5c515d0d5c0d5c0b
# 5b58590a595c595c595f4d4d4a4a4d4d5c0b5c0a5d0d5c515c51

# returns 'Hello'
d.decode('595e5b085b5a5b5a5b594d4d4a4a4d4d5c0c5d0d5c0d5c0a')
d.decode('5b5d595059595959595a4d4d4a4a4d4d5c515d0d5c0d5c0b')
d.decode('5b58590a595c595c595f4d4d4a4a4d4d5c0b5c0a5d0d5c515c51')

```


## Use Own Key for Encode

```javascript
const d=require('d-encode-decode')

#Set Key for Encryption
d.key("your key");

# returns '500352555207520752064646414146465752570056545751'
d.encode('hello')

# Everytime you encode same string and get different unique encoded value
# for "Hello" It returns
# 500352555207520752064646414146465752570056545751
# 5104535053005300535a4646414146465703565457535757
# 535451005150515051534646414146465752575256545756

# returns 'Hello'
d.decode('500352555207520752064646414146465752570056545751')
d.decode('5104535053005300535a4646414146465703565457535757')
d.decode('535451005150515051534646414146465752575256545756')

```


## Set Time Limit for decryption

```javascript
const d=require('d-encode-decode')

#Set Key for Encryption (Optional)
d.key("your key");

# returns '500352555207520752064646414146465752570056545751'
d.encode('hello',20) //Time in seconds d.encode("String to encode","Time in Seconds")
# for above this key only valid for 20 seconds after that it returns "String Expired!"

# Everytime you encode same string and get different unique encoded value
# for "Hello" It returns
# 411043444314431443115656515156564644464447444641461347444641464646454646464246464644464246464644474446414640
# 5f515d5c5d0a5d0a5d0f4d4d4a4a4d4d5c0d5c515d0d5c0d5c085d0d5c515c0f5c0a5c0f5c0b5c0f5c0d5c0b5c595c585d0d5c515c50
# 5c0c5e5a5e085e085e504d4d4a4a4d4d5c515c0f5d0d5c0f5d0d5c515c0f5c0a5c0f5c0b5c0f5c0d5c085c0b5c515d0d5c515c50

# returns 'Hello'
d.decode('411043444314431443115656515156564644464447444641461347444641464646454646464246464644464246464644474446414640')
d.decode('5f515d5c5d0a5d0a5d0f4d4d4a4a4d4d5c0d5c515d0d5c0d5c085d0d5c515c0f5c0a5c0f5c0b5c0f5c0d5c0b5c595c585d0d5c515c50')
d.decode('5c0c5e5a5e085e085e504d4d4a4a4d4d5c515c0f5d0d5c0f5d0d5c515c0f5c0a5c0f5c0b5c0f5c0d5c085c0b5c515d0d5c515c50')

```

## Publisher
[Dishant Kapoor](https://dishantkapoor.com/)
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
