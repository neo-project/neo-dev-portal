---
sidebar_label: 'NeoVM OpCodes'
---

# Neo Virtual Machine OpCodes

Use this handy table to skip ahead to the [opcode reference](#opcodes).

<table class="table table-bordered opcode">
    <tbody>
        <tr>
            <td><a href="#00">00</a></td>
            <td><a href="#01">01</a></td>
            <td><a href="#02">02</a></td>
            <td><a href="#03">03</a></td>
            <td><a href="#04">04</a></td>
            <td><a href="#05">05</a></td>
            <td></td>
            <td></td>
            <td><a href="#08">08</a></td>
            <td><a href="#09">09</a></td>
            <td><a href="#0A">0A</a></td>
            <td><a href="#0B">0B</a></td>
            <td><a href="#0C">0C</a></td>
            <td><a href="#0D">0D</a></td>
            <td><a href="#0E">0E</a></td>
            <td><a href="#0F">0F</a></td>
        </tr>
        <tr>
            <td><a href="#10">10</a></td>
            <td><a href="#11">11</a></td>
            <td><a href="#12">12</a></td>
            <td><a href="#13">13</a></td>
            <td><a href="#14">14</a></td>
            <td><a href="#15">15</a></td>
            <td><a href="#16">16</a></td>
            <td><a href="#17">17</a></td>
            <td><a href="#18">18</a></td>
            <td><a href="#19">19</a></td>
            <td><a href="#1A">1A</a></td>
            <td><a href="#1B">1B</a></td>
            <td><a href="#1C">1C</a></td>
            <td><a href="#1D">1D</a></td>
            <td><a href="#1E">1E</a></td>
            <td><a href="#1F">1F</a></td>
        </tr>
        <tr>
            <td><a href="#20">20</a></td>
            <td><a href="#21">21</a></td>
            <td><a href="#22">22</a></td>
            <td><a href="#23">23</a></td>
            <td><a href="#24">24</a></td>
            <td><a href="#25">25</a></td>
            <td><a href="#26">26</a></td>
            <td><a href="#27">27</a></td>
            <td><a href="#28">28</a></td>
            <td><a href="#29">29</a></td>
            <td><a href="#2A">2A</a></td>
            <td><a href="#2B">2B</a></td>
            <td><a href="#2C">2C</a></td>
            <td><a href="#2D">2D</a></td>
            <td><a href="#2E">2E</a></td>
            <td><a href="#2F">2F</a></td>
        </tr>
        <tr>
            <td><a href="#30">30</a></td>
            <td><a href="#31">31</a></td>
            <td><a href="#32">32</a></td>
            <td><a href="#33">33</a></td>
            <td><a href="#34">34</a></td>
            <td><a href="#35">35</a></td>
            <td><a href="#36">36</a></td>
            <td><a href="#37">37</a></td>
            <td><a href="#38">38</a></td>
            <td><a href="#39">39</a></td>
            <td><a href="#3A">3A</a></td>
            <td><a href="#3B">3B</a></td>
            <td><a href="#3C">3C</a></td>
            <td><a href="#3D">3D</a></td>
            <td><a href="#3E">3E</a></td>
            <td><a href="#3F">3F</a></td>
        </tr>
        <tr>
            <td><a href="#40">40</a></td>
            <td><a href="#41">41</a></td>
            <td></td>
            <td><a href="#43">43</a></td>
            <td></td>
            <td><a href="#45">45</a></td>
            <td><a href="#46">46</a></td>
            <td></td>
            <td><a href="#48">48</a></td>
            <td><a href="#49">49</a></td>
            <td><a href="#4A">4A</a></td>
            <td><a href="#4B">4B</a></td>
            <td></td>
            <td><a href="#4D">4D</a></td>
            <td><a href="#4E">4E</a></td>
            <td></td>
        </tr>
        <tr>
            <td><a href="#50">50</a></td>
            <td><a href="#51">51</a></td>
            <td><a href="#52">52</a></td>
            <td><a href="#53">53</a></td>
            <td><a href="#54">54</a></td>
            <td><a href="#55">55</a></td>
            <td><a href="#56">56</a></td>
            <td><a href="#57">57</a></td>
            <td><a href="#58">58</a></td>
            <td><a href="#59">59</a></td>
            <td><a href="#5A">5A</a></td>
            <td><a href="#5B">5B</a></td>
            <td><a href="#5C">5C</a></td>
            <td><a href="#5D">5D</a></td>
            <td><a href="#5E">5E</a></td>
            <td><a href="#5F">5F</a></td>
        </tr>
        <tr>
            <td><a href="#60">60</a></td>
            <td><a href="#61">61</a></td>
            <td><a href="#62">62</a></td>
            <td><a href="#63">63</a></td>
            <td><a href="#64">64</a></td>
            <td><a href="#65">65</a></td>
            <td><a href="#66">66</a></td>
            <td><a href="#67">67</a></td>
            <td><a href="#68">68</a></td>
            <td><a href="#69">69</a></td>
            <td><a href="#6A">6A</a></td>
            <td><a href="#6B">6B</a></td>
            <td><a href="#6C">6C</a></td>
            <td><a href="#6D">6D</a></td>
            <td><a href="#6E">6E</a></td>
            <td><a href="#6F">6F</a></td>
        </tr>
        <tr>
            <td><a href="#70">70</a></td>
            <td><a href="#71">71</a></td>
            <td><a href="#72">72</a></td>
            <td><a href="#73">73</a></td>
            <td><a href="#74">74</a></td>
            <td><a href="#75">75</a></td>
            <td><a href="#76">76</a></td>
            <td><a href="#77">77</a></td>
            <td><a href="#78">78</a></td>
            <td><a href="#79">79</a></td>
            <td><a href="#7A">7A</a></td>
            <td><a href="#7B">7B</a></td>
            <td><a href="#7C">7C</a></td>
            <td><a href="#7D">7D</a></td>
            <td><a href="#7E">7E</a></td>
            <td><a href="#7F">7F</a></td>
        </tr>
        <tr>
            <td><a href="#80">80</a></td>
            <td><a href="#81">81</a></td>
            <td><a href="#82">82</a></td>
            <td><a href="#83">83</a></td>
            <td><a href="#84">84</a></td>
            <td><a href="#85">85</a></td>
            <td><a href="#86">86</a></td>
            <td><a href="#87">87</a></td>
            <td><a href="#88">88</a></td>
            <td><a href="#89">89</a></td>
            <td></td>
            <td><a href="#8B">8B</a></td>
            <td><a href="#8C">8C</a></td>
            <td><a href="#8D">8D</a></td>
            <td><a href="#8E">8E</a></td>
            <td></td>
        </tr>
        <tr>
            <td><a href="#90">90</a></td>
            <td><a href="#91">91</a></td>
            <td><a href="#92">92</a></td>
            <td><a href="#93">93</a></td>
            <td></td>
            <td></td>
            <td></td>
            <td><a href="#97">97</a></td>
            <td><a href="#98">98</a></td>
            <td><a href="#99">99</a></td>
            <td><a href="#9A">9A</a></td>
            <td><a href="#9B">9B</a></td>
            <td><a href="#9C">9C</a></td>
            <td><a href="#9D">9D</a></td>
            <td><a href="#9E">9E</a></td>
            <td><a href="#9F">9F</a></td>
        </tr>
        <tr>
            <td><a href="#A0">A0</a></td>
            <td><a href="#A1">A1</a></td>
            <td><a href="#A2">A2</a></td>
            <td><a href="#A3">A3</a></td>
            <td><a href="#A4">A4</a></td>
            <td><a href="#A5">A5</a></td>
            <td><a href="#A6">A6</a></td>
            <td></td>
            <td><a href="#A8">A8</a></td>
            <td><a href="#A9">A9</a></td>
            <td><a href="#AA">AA</a></td>
            <td><a href="#AB">AB</a></td>
            <td><a href="#AC">AC</a></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><a href="#B1">B1</a></td>
            <td></td>
            <td><a href="#B3">B3</a></td>
            <td><a href="#B4">B4</a></td>
            <td><a href="#B5">B5</a></td>
            <td><a href="#B6">B6</a></td>
            <td><a href="#B7">B7</a></td>
            <td><a href="#B8">B8</a></td>
            <td><a href="#B9">B9</a></td>
            <td><a href="#BA">BA</a></td>
            <td><a href="#BB">BB</a></td>
            <td></td>
            <td></td>
            <td><a href="#BE">BE</a></td>
            <td><a href="#BF">BF</a></td>
        </tr>
        <tr>
            <td><a href="#C0">C0</a></td>
            <td><a href="#C1">C1</a></td>
            <td><a href="#C2">C2</a></td>
            <td><a href="#C3">C3</a></td>
            <td><a href="#C4">C4</a></td>
            <td><a href="#C5">C5</a></td>
            <td><a href="#C6">C6</a></td>
            <td></td>
            <td><a href="#C8">C8</a></td>
            <td></td>
            <td><a href="#CA">CA</a></td>
            <td><a href="#CB">CB</a></td>
            <td><a href="#CC">CC</a></td>
            <td><a href="#CD">CD</a></td>
            <td><a href="#CE">CE</a></td>
            <td><a href="#CF">CF</a></td>
        </tr>
        <tr>
            <td><a href="#D0">D0</a></td>
            <td><a href="#D1">D1</a></td>
            <td><a href="#D2">D2</a></td>
            <td><a href="#D3">D3</a></td>
            <td><a href="#D4">D4</a></td>
            <td></td>
            <td></td>
            <td></td>
            <td><a href="#D8">D8</a></td>
            <td><a href="#D9">D9</a></td>
            <td></td>
            <td><a href="#DB">DB</a></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><a href="#E0">E0</a></td>
            <td><a href="#E1">E1</a></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
        </tr>
    </tbody>
</table>

## OverView

This OpCode collection defines a set of instructions for handling stack operations, compound-type operations, bitwise
logic, arithmetic calculations, and more.

- **Constants**

These opcodes are used to push constant values onto the stack. Included are instructions for pushing integers of
different sizes (e.g., signed integers from 1 byte to 32 bytes) onto the stack (PUSHINT8 through PUSHINT256), as well as
instructions for pushing Boolean values true (PUSHT) and false (PUSHF). Also included are opcodes for pushing pointers
(PUSHA), nulls (PUSHNULL), data blocks (PUSHDATA1 through PUSHDATA4), and fixed values (PUSHM1 through PUSH16) onto the
stack.

Translated with DeepL.com (free version)

- **Flow Control**
Flow control opcodes are used to control the flow of program execution. These instructions are typically used for
operations such as conditional jumps, loops, and method calls to implement complex logic control.

- **Stack**
Stack opcodes are used to manipulate data on the stack and support push, pop, duplicate and swap operations. They play
an important role in data manipulation and management to ensure that data can be efficiently manipulated and transferred
as expected.

- **Slot**
The Slot opcode is used to manage the operation of local variable slots. These instructions allow data to be stored into
or loaded from specific slots to support the management of local variables and parameters.

- **Splice**
The splice opcode is used to handle splice, split, and extract operations on byte arrays and strings. These instructions
can be used to merge multiple chunks of data or to extract portions of existing data.

- **Bitwise Logic**
Bitwise logical opcodes are used to perform bitwise operations (e.g., AND, OR, XOR, NOT, etc.) that are typically used
in low-level data processing, such as encryption and compression algorithms.

- **Arithmetic**
Arithmetic opcodes are used to perform basic arithmetic operations (such as addition, subtraction, multiplication,
division, etc.). These operations are very useful in implementing data calculations and numerical processing.

- **Compound-Type**
Complex type opcodes are used to manipulate complex data types such as arrays, structures, and other custom types. These
instructions are used to create, modify and destroy complex data types.

- **Types**
Type opcodes are used to handle and manipulate the conversion and checking of data types. These instructions are used to
determine the type of data or to convert one type to another.

- **Extensions**
Advanced operations with special effects.

## OpCodes

<link rel="stylesheet" href="opcode.css">

<table class="table" style="line-height: 1; font-size: 78%; margin-top: 1em">
    <thead>
        <tr>
            <th style="width: 48px">No.</th>
            <th style="width: auto">Name</th>
            <th style="width: auto">Stack Input</th>
            <th style="width: auto">Stack Output</th>
            <th style="width: auto">Expression</th>
            <th style="width: 200px">Notes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a class="anchor" name="00"></a><a href="#00">00</a></td>
            <td>PUSHINT8</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                Pushes a 1-byte signed integer onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="01"></a><a href="#01">01</a></td>
            <td>PUSHINT16</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                Pushes a 2-byte signed integer onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="02"></a><a href="#02">02</a></td>
            <td>PUSHINT32</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                Pushes a 4-byte signed integer onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="03"></a><a href="#03">03</a></td>
            <td>PUSHINT64</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                Pushes a 8-byte signed integer onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="04"></a><a href="#04">04</a></td>
            <td>PUSHINT128</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                -
            </td>
            <td>
                Pushes a 16-byte signed integer onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="05"></a><a href="#05">05</a></td>
            <td>PUSHINT256</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                Pushes a 32-byte signed integer onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="08"></a><a href="#08">08</a></td>
            <td>PUSHT</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>true</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                -
            </td>
            <td>
                Pushes the boolean value true onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="09"></a><a href="#09">09</a></td>
            <td>PUSHF</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>false</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                Pushes the boolean value false onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="0A"></a><a href="#0A">0A</a></td>
            <td>PUSHA</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>Pointer</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                Converts the 4-bytes offset to an Pointer, and pushes it onto the stack..
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="0B"></a><a href="#0B">0B</a></td>
            <td>PUSHNULL</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>null</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The item null is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="0C"></a><a href="#0C">0C</a></td>
            <td>PUSHDATA1</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The next byte contains the number of bytes to be pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="0D"></a><a href="#0D">0D</a></td>
            <td>PUSHDATA2</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The next two bytes contain the number of bytes to be pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="0E"></a><a href="#0E">0E</a></td>
            <td>PUSHDATA4</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The next four bytes contain the number of bytes to be pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="0F"></a><a href="#0F">0F</a></td>
            <td>PUSHM1</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>-1</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The number -1 is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="10"></a><a href="#10">10</a></td>
            <td>PUSH0</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The number 0 is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="11"></a><a href="#11">11</a></td>
            <td>PUSH1</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The number 1 is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="12"></a><a href="#12">12</a></td>
            <td>PUSH2</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The number 2 is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="13"></a><a href="#13">13</a></td>
            <td>PUSH3</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>3</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The number 3 is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="14"></a><a href="#14">14</a></td>
            <td>PUSH4</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>4</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The number 4 is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="15"></a><a href="#15">15</a></td>
            <td>PUSH5</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>5</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The number 5 is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="16"></a><a href="#16">16</a></td>
            <td>PUSH6</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>6</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The number 6 is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="17"></a><a href="#17">17</a></td>
            <td>PUSH7</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>7</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The number 7 is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="18"></a><a href="#18">18</a></td>
            <td>PUSH8</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>8</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The number 8 is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="19"></a><a href="#19">19</a></td>
            <td>PUSH9</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>9</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The number 9 is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="1A"></a><a href="#1A">1A</a></td>
            <td>PUSH10</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>10</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The number 10 is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="1B"></a><a href="#1B">1B</a></td>
            <td>PUSH11</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>11</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The number 11 is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="1C"></a><a href="#1C">1C</a></td>
            <td>PUSH12</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>12</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The number 12 is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="1D"></a><a href="#1D">1D</a></td>
            <td>PUSH13</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>13</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The number 13 is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="1E"></a><a href="#1E">1E</a></td>
            <td>PUSH14</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>14</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The number 14 is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="1F"></a><a href="#1F">1F</a></td>
            <td>PUSH15</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>15</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The number 15 is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="20"></a><a href="#20">20</a></td>
            <td>PUSH16</td>
            <td>-</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>16</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>
                The number 16 is pushed onto the stack.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="21"></a><a href="#21">21</a></td>
            <td>NOP</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
                The NOP operation does nothing. It is intended to fill in space if opcodes are patched.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="22"></a><a href="#22">22</a></td>
            <td>JMP</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
                Unconditionally transfers control to a target instruction. The target instruction is represented as a 1-byte signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="23"></a><a href="#23">23</a></td>
            <td>JMP</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
                Unconditionally transfers control to a target instruction. The target instruction is represented as a 4-bytes signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="24"></a><a href="#24">24</a></td>
            <td>JMPIF</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
                Transfers control to a target instruction if the value is true, not null, or non-zero. The target instruction is represented as a 1-byte signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="25"></a><a href="#25">25</a></td>
            <td>JMPIF_L</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
                Transfers control to a target instruction if the value is true, not null, or non-zero. The target instruction is represented as a 4-bytes signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="26"></a><a href="#26">26</a></td>
            <td>JMPIFNOT</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
                Transfers control to a target instruction if the value is false, a null reference, or zero. The target instruction is represented as a 1-byte signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="27"></a><a href="#27">27</a></td>
            <td>JMPIFNOT_L</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
                Transfers control to a target instruction if the value is false, a null reference, or zero. The target instruction is represented as a 4-bytes signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="28"></a><a href="#28">28</a></td>
            <td>JMPEQ</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>b</td>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
                Transfers control to a target instruction if two values are equal. The target instruction is represented as a 1-byte signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="29"></a><a href="#29">29</a></td>
            <td>JMPEQ_L</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>b</td>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
                Transfers control to a target instruction if two values are equal. The target instruction is represented as a 4-bytes signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="2A"></a><a href="#2A">2A</a></td>
            <td>JMPNE</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>b</td>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
                Transfers control to a target instruction when two values are not equal. The target instruction is represented as a 1-byte signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="2B"></a><a href="#2B">2B</a></td>
            <td>JMPNE_L</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>b</td>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
                Transfers control to a target instruction when two values are not equal. The target instruction is represented as a 4-bytes signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="2C"></a><a href="#2C">2C</a></td>
            <td>JMPGT</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>b</td>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
                Transfers control to a target instruction if the first value is greater than the second value. The target instruction is represented as a 1-byte signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="2D"></a><a href="#2D">2D</a></td>
            <td>JMPGT_L</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>b</td>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
                Transfers control to a target instruction if the first value is greater than the second value. The target instruction is represented as a 4-bytes signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="2E"></a><a href="#2E">2E</a></td>
            <td>JMPGE</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>b</td>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
                Transfers control to a target instruction if the first value is greater than or equal to the second value. The target instruction is represented as a 1-byte signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="2F"></a><a href="#2F">2F</a></td>
            <td>JMPGE_L</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>b</td>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
                Transfers control to a target instruction if the first value is greater than or equal to the second value. The target instruction is represented as a 4-bytes signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="30"></a><a href="#30">30</a></td>
            <td>JMPLT</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>b</td>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
                Transfers control to a target instruction if the first value is less than the second value. The target instruction is represented as a 1-byte signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="31"></a><a href="#31">31</a></td>
            <td>JMPLT_L</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>b</td>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
                Transfers control to a target instruction if the first value is less than the second value. The target instruction is represented as a 4-bytes signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="32"></a><a href="#32">32</a></td>
            <td>JMPLE</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>b</td>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
                Transfers control to a target instruction if the first value is less than or equal to the second value. The target instruction is represented as a 1-byte signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="33"></a><a href="#33">33</a></td>
            <td>JMPLE_L</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>b</td>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
                Transfers control to a target instruction if the first value is less than or equal to the second value. The target instruction is represented as a 4-bytes signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="34"></a><a href="#34">34</a></td>
            <td>CALL</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
                Calls the function at the target address which is represented as a 1-byte signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="35"></a><a href="#35">35</a></td>
            <td>CALL_L</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
                Calls the function at the target address which is represented as a 4-bytes signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="36"></a><a href="#36">36</a></td>
            <td>CALLA</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
                Pop the address of a function from the stack, and call the function.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="37"></a><a href="#37">37</a></td>
            <td>CALLT</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
                Calls the function which is described by the token.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="38"></a><a href="#38">38</a></td>
            <td>ABORT</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
                It turns the vm state to FAULT immediately, and cannot be caught.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="39"></a><a href="#39">39</a></td>
            <td>ASSERT</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
                Pop the top value of the stack. If it's false, exit vm execution and set vm state to FAULT.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="3A"></a><a href="#3A">3A</a></td>
            <td>THROW</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
                Pop the top value of the stack, and throw it.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="3B"></a><a href="#3B">3B</a></td>
            <td>TRY</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
                TRY CatchOffset(sbyte) FinallyOffset(sbyte). If there's no catch body, set CatchOffset 0. If there's no finally body, set FinallyOffset 0.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="3C"></a><a href="#3C">3C</a></td>
            <td>TRY_L</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
                TRY_L CatchOffset(int) FinallyOffset(int). If there's no catch body, set CatchOffset 0. If there's no finally body, set FinallyOffset 0.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="3D"></a><a href="#3D">3D</a></td>
            <td>ENDTRY</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
                Ensures that the appropriate surrounding finally blocks are executed. And then unconditionally transfers control to the specific target instruction, represented as a 1-byte signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="3E"></a><a href="#3E">3E</a></td>
            <td>ENDTRY_L</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
                Ensures that the appropriate surrounding finally blocks are executed. And then unconditionally transfers control to the specific target instruction, represented as a 4-byte signed offset from the beginning of the current instruction.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="3F"></a><a href="#3F">3F</a></td>
            <td>ENDFINALLY</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
                End finally, If no exception happen or be catched, vm will jump to the target instruction of ENDTRY/ENDTRY_L. Otherwise, vm will rethrow the exception to upper layer.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="40"></a><a href="#40">40</a></td>
            <td>RET</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
                Returns from the current method.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="41"></a><a href="#41">41</a></td>
            <td>SYSCALL</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
                Calls to an interop service.
            </td>
        </tr>
        <tr>
            <td colspan="6">Unfinished to be continued...</td>
        </tr>
        <tr>
            <td><a class="anchor" name="99"></a><a href="#99">99</a></td>
            <td>SIGN</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a.Sign</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                a.Sign
            </td>
            <td>
                Puts the sign of top stack item on top of the main stack. If value is negative, put -1; if positive, put 1; if value is zero, put 0.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="9A"></a><a href="#9A">9A</a></td>
            <td>ABS</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>abs(a)</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                abs(a)
            </td>
            <td>
                The input is made positive.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="9B"></a><a href="#9B">9B</a></td>
            <td>NEGATE</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>-a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                -a
            </td>
            <td>
                The sign of the input is flipped.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="9C"></a><a href="#9C">9C</a></td>
            <td>INC</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a+1</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                a+1
            </td>
            <td>
                1 is added to the input.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="9D"></a><a href="#9D">9D</a></td>
            <td>DEC</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a-1</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                a-1
            </td>
            <td>
                1 is subtracted from the input.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="9E"></a><a href="#9E">9E</a></td>
            <td>ADD</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>b</td>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a+b</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                a+b
            </td>
            <td>
                a is added to b.
            </td>
        </tr>
        <tr>
            <td><a class="anchor" name="9F"></a><a href="#9F">9F</a></td>
            <td>SUB</td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>b</td>
                            <td>a</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                <table class="stack table-bordered">
                    <tbody>
                        <tr>
                            <td>a-b</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                a-b
            </td>
            <td>
                b is subtracted from a.
            </td>
        </tr>
        <tr>
            <td colspan="6">Unfinished to be continued...</td>
        </tr>
    </tbody>
</table>

