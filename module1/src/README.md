1. What are some differences between interfaces and types in TypeScript?

interfaces and types এর মধ্যে পার্থক্য হল  interface দিয়ে object বানানো যায়।
আর type দিয়ে  শুধু object ছাড়াও আরও অনেক কিছু — যেমন union, string, number সব define করা যায়।
interface একটু বেশি clean এবং extend করা সহজ, কিন্তু type বেশি flexible  


2. What is type inference in TypeScript? Why is it helpful?

টাইপ ইনফারেন্স হলো TypeScript-এর একটি বৈশিষ্ট্য, যার মাধ্যমে কম্পাইলার প্রোগ্রামারের না বললেও ভেরিয়েবল বা এক্সপ্রেশন অনুযায়ি  স্বয়ংক্রিয়ভাবে নির্ধারণ করে ফেলে। অর্থাৎ,  টাইপ না লিখলেও TypeScript এর মান দেখে নিজেই বুঝে নেয় কোন টাইপ হবে ।
সুবিধা হল: 
 কোডকে সংক্ষিপ্ত করা যায় ।
টাইপ না লিখেও টাইপের সুবিধা পাওয়া যায়।